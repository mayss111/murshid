package com.murshid.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

/**
 * Service d'intelligence artificielle basé sur l'API Groq (compatible OpenAI).
 *
 * Toute la génération (chat, parcours/cours/quiz, évaluation) passe par un
 * seul appel Groq par opération, afin d'éviter les timeouts et le rate-limit
 * sur les hébergements gratuits (free-tier) où plusieurs appels en chaîne échouent.
 *
 * Un fallback enrichi et variable est conservé UNIQUEMENT en dernier recours
 * si l'API Groq est indisponible (clé invalide, 401, hors-ligne).
 */
@Service
public class GroqService {

    private static final Logger logger = LoggerFactory.getLogger(GroqService.class);

    @Value("${groq.api.url:https://api.groq.com/openai/v1/chat/completions}")
    private String groqApiUrl;

    @Value("${groq.api.key:}")
    private String groqApiKey;

    @Value("${groq.model:llama-3.3-70b-versatile}")
    private String model;

    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public GroqService() {
        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
        factory.setConnectTimeout(15000);
        factory.setReadTimeout(90000);
        this.restTemplate = new RestTemplate(factory);
    }

    // ====================== CHATBOT ======================

    public String discuter(List<Map<String, String>> messages) {
        try {
            if (groqApiKey == null || groqApiKey.isBlank()) {
                throw new IllegalStateException("Clé API Groq manquante.");
            }
            return appelGroqAvecHistorique(messages, 1000);
        } catch (Exception ex) {
            logger.error("Erreur Groq (Chat): {}", ex.getMessage());
            return "عذراً، لم أتمكّن من الردّ في هذه اللحظة. حاول مرة أخرى بعد قليل.";
        }
    }

    @SuppressWarnings("unchecked")
    private String appelGroqAvecHistorique(List<Map<String, String>> messages, int maxTokens) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(groqApiKey);

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", model);
        requestBody.put("temperature", 0.8);
        requestBody.put("max_tokens", maxTokens);
        requestBody.put("messages", messages);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

        ResponseEntity<Map> response = restTemplate.postForEntity(groqApiUrl, entity, Map.class);

        if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
            Object choicesObj = response.getBody().get("choices");
            if (choicesObj instanceof List<?> choices && !choices.isEmpty()) {
                Object first = choices.get(0);
                if (first instanceof Map<?, ?> choiceMap) {
                    Object messageObj = choiceMap.get("message");
                    if (messageObj instanceof Map<?, ?> messageMap) {
                        Object content = messageMap.get("content");
                        if (content != null) {
                            return content.toString().trim();
                        }
                    }
                }
            }
        }
        throw new RuntimeException("Réponse Groq invalide.");
    }

    // ====================== GÉNÉRATION PARCOURS / COURS / QUIZ ======================

    public String genererParcours(String matiere, int niveauActuel) {
        try {
            String prompt = "أنت «مُرشِد»، خبير في المناهج الإسلامية (تجويد، فقه، حديث، تفسير). "
                + "مهمتك: صياغة خطة مسار تعلّم مخصّصة، دقيقة، ومُلهمة.\n\n"
                + "المادة: " + matiere + " | المستوى الحالي: " + niveauActuel + " | المستوى الهدف: " + (niveauActuel + 4) + ".\n\n"
                + "تعليمات صارمة:\n"
                + "1) اقترح 3 دروس رئيسية متصاعدة ومنسجمة (من الأسس إلى الاحتراف)، لكل درس عنوان أصيل وأهداف تعلّمية ملموسة (2-3 أهداف).\n"
                + "2) اجعل العناوين والصياغات مُتنوّعة وخالية من التكرار أو الصياغات الجاهزة.\n"
                + "3) خالف بين المواد: لا تُعد استخدام نفس عناوين الدروس لكل المواد.\n"
                + "4) الأسلوب: عربي فصيح، دافئ، تشجيعي، وخالٍ من الأخطاء النحوية.\n\n"
                + "أجب بصيغة JSON صالحة فقط (دون أي نص خارجها، ودون ```json) بالهيكل التالي تماماً:\n"
                + "{\n"
                + "  \"titre\": \"عنوان جذّاب ووصفي للمسار\",\n"
                + "  \"description\": \"فقرة واحدة (2-3 جمل) تلخّص رؤية المسار وأهمّيته بأسلوب مُلهم\",\n"
                + "  \"lecons\": [\n"
                + "    {\"titre\": \"عنوان الدرس الأول\", \"objectifs\": \"أهداف الدرس الأول\"},\n"
                + "    {\"titre\": \"عنوان الدرس الثاني\", \"objectifs\": \"أهداف الدرس الثاني\"},\n"
                + "    {\"titre\": \"عنوان الدرس الثالث\", \"objectifs\": \"أهداف الدرس الثالث\"}\n"
                + "  ]\n"
                + "}";
            String response = appelGroq(prompt, 1500, false);
            String cleaned = nettoyerReponsePourJson(response);

            try {
                JsonNode root = objectMapper.readTree(cleaned);
                String titre = root.path("titre").asText("").trim();
                String description = root.path("description").asText("").trim();
                if (titre.isEmpty()) {
                    titre = "مسار " + matiere + " - المستوى " + niveauActuel;
                }
                if (description.isEmpty()) {
                    description = "مسار تعلّم مخصّص ومولّد بالذكاء الاصطناعي في " + matiere + ".";
                }
                StringBuilder sb = new StringBuilder();
                sb.append(description).append("\n\nالدروس المخطّط لها:\n");
                JsonNode lecons = root.path("lecons");
                if (lecons.isArray()) {
                    int i = 1;
                    for (JsonNode lecon : lecons) {
                        String t = lecon.path("titre").asText("").trim();
                        String o = lecon.path("objectifs").asText("").trim();
                        if (!t.isEmpty()) {
                            sb.append(i).append(". ").append(t);
                            if (!o.isEmpty()) {
                                sb.append(" — ").append(o);
                            }
                            sb.append("\n");
                            i++;
                        }
                    }
                }
                return sb.toString().trim();
            } catch (Exception parseEx) {
                logger.error("Erreur parsing parcours JSON: {}", parseEx.getMessage());
                logger.error("الرد الخام: {}", cleaned);
                if (!cleaned.isBlank()) {
                    return cleaned;
                }
                return getFallbackParcoursPlan(matiere, niveauActuel);
            }
        } catch (Exception ex) {
            logger.error("Erreur Groq (Parcours): {}", ex.getMessage());
            return getFallbackParcoursPlan(matiere, niveauActuel);
        }
    }

    /**
     * Génère tout le parcours (leçons + contenu + questions) en UN SEUL appel Groq.
     * Renvoie une liste de leçons, chacune avec son contenu et ses questions.
     * Renvoie null si l'IA échoue (le appelant utilise alors le fallback).
     */
    public List<Map<String, Object>> genererParcoursComplet(String matiere, int niveau) {
        try {
            String prompt = "أنت «مُرشِد»، عالِمٌ ومُعَلِّمٌ إسلاميٌّ مُبدِعٌ ومُختَصٌّ في " + matiere + ". "
                    + "تَستَطيعُ تَأليفَ مَساراتٍ تَعليميَّةٍ أصيلةٍ ومُلْهِمةٍ.\n\n"
                    + "المَهِمَّة: صُمِّمْ مَسارَ تَعليميٍّ كاملٍ لمادة «" + matiere + "» لِطالِبٍ في المُستوى " + niveau + ".\n\n"
                    + "قَواعِدُ التَلْكِيبِ الصَّارِمَة:\n"
                    + "1) اخترِعْ ٣ دُروسٍ مُتَسَلْسِلَةٍ (مِنَ الأَسَاسِ إلى التَّخَصُّص)، كُلُّ دَرسٍ فَريدٌ جِذْرِيَّاً عَنِ الآخَرِ في المَوضوعِ وَالنَّظْرَةِ وَالأَمْثِلَةِ.\n"
                    + "2) لِكُلِّ دَرسٍ:\n"
                    + "   • عُنْوانٌ جَذَّابٌ ومُمَيَّزٌ (لا يُشْبِهُ عَناوينَ دُروسٍ أُخْرَى في هَذا المَسار).\n"
                    + "   • مَحتوىً تَعليميَّاً أصيلاً (٣٥٠-٥٠٠ كَلِمةٍ) بِهَيْكَلٍ مُبَدَّلٍ قَلِيلاً بَيْنَ الدُّروسِ:\n"
                    + "     [أ] بَدْءٌ مُشَوِّقٌ بِسُؤالٍ أو حَدِيثٍ أَوْ آيَةٍ مُختَارةٍ.\n"
                    + "     [ب] تَعْريفاتٌ مُبَسَّطَةٌ ومَفَاهِيمٌ أَسَاسِيَّةٌ بِأَسْلوبٍ سَهْلٍ.\n"
                    + "     [ج] أَمثِلَةٌ تَطْبِيقِيَّةٌ مِنَ الحَياةِ اليَوْمِيَّةِ (مِنْ مَجالِ المَادةِ).\n"
                    + "     [د] شَوَاهِدٌ مِنَ القُرْآنِ الكَرِيمِ أَوْ الأَحَادِيثِ النَّبَوِيَّةِ الصَّحِيحَةِ مَعَ ذِكْرِ المَصْدَرِ.\n"
                    + "     [هـ] خَاتِمَةٌ تَلْخِيصِيَّةٌ وتَحْدِيدٌ لِلخُطْوَةِ التَّالِيَةِ.\n"
                    + "3) تُنشِئُ لِكُلِّ دَرسٍ ٥ أَسْئِلَةٍ مُتَنَوِّعَةٍ بِشَكْلٍ كَبِيرٍ (لا تُكَرِّرِ الصِّيَاغَةَ أَوَ النَّمْطَ):\n"
                    + "   • سؤالٌ مُتَعَدِّدُ الخِيَارَاتِ (QCM) بِـ ٤ خِيَارَاتٍ وَإِجَابَةٍ وَاحِدَةٍ صَحِيحَةٍ.\n"
                    + "   • سؤالٌ صَحَ أَوْ خَطَأٌ مَعَ تَبْرِيرٍ.\n"
                    + "   • سؤالٌ تَطْبِيقِيٌّ «مَا تَفْعَلُ إِذَا...؟».\n"
                    + "   • سؤالٌ تَحْلِيلِيٌّ «لِمَاذَا...؟» أَوْ «كَيْفَ...؟».\n"
                    + "   • سؤالٌ تَأمُّلِيٌّ أو رَابِطٌ بِالحَياةِ.\n"
                    + "4) اجْعَلْ الأَسْلوبَ دَافِئاً، تَشْجِيعِيَّاً، خَالِياً مِنَ الأَخْطَاءِ النَّحْوِيَّةِ، ومُتَنَوِّعاً بَيْنَ الدُّرُوسِ.\n\n"
                    + "أَجِبْ بِصيغةِ JSON صالِحةٍ فَقط (دونَ أيِّ نَصٍّ قَبْلَها أَوْ بَعْدَها، ودونَ ```json) بِالهَيْكَلِ التَّالِي تَماماً:\n"
                    + "[\n"
                    + "  {\n"
                    + "    \"titre\": \"عُنْوانُ الدَّرْسِ الأَوَّلِ المُبْدَعُ\",\n"
                    + "    \"contenu\": \"مَحتوى الدَّرْسِ الأَوَّلِ المُفَصَّلُ...\",\n"
                    + "    \"questions\": [\n"
                    + "      {\"texte\": \"نَصُّ السُّؤالِ المُتَعَدِّدِ الخِيَارَاتِ\", \"type\": \"QCM\", \"choix\": [\"خِيَارٌ أَوَّلٌ\", \"خِيَارٌ ثَانٍ\", \"خِيَارٌ ثَالِثٌ\", \"خِيَارٌ رَابِعٌ\"], \"reponseCorrecte\": \"الخِيَارُ الصَّحِيحُ\", \"reponseDetaillee\": \"شَرحٌ تَرْبَوِيٌّ مُفَصَّلٌ لِلمُجِيبِ وَالمُخْطِئِ\"},\n"
                    + "      {\"texte\": \"نَصُّ السُّؤالِ الصَّحِ أَوْ الخَطَأ\", \"type\": \"TRUE_FALSE\", \"reponseAttendue\": \"صَحِ\", \"reponseDetaillee\": \"تَبْرِيرٌ\"},\n"
                    + "      {\"texte\": \"نَصُّ السُّؤالِ التَّطْبِيقِيِّ\", \"type\": \"APPLICATION\", \"reponseAttendue\": \"الإِجَابَةُ المُتَوَقَّعَةُ\", \"reponseDetaillee\": \"شَرحٌ تَرْبَوِيٌّ\"},\n"
                    + "      {\"texte\": \"نَصُّ السُّؤالِ التَّحْلِيلِيِّ\", \"type\": \"ANALYSIS\", \"reponseAttendue\": \"الإِجَابَةُ المُتَوَقَّعَةُ\", \"reponseDetaillee\": \"شَرحٌ تَرْبَوِيٌّ\"},\n"
                    + "      {\"texte\": \"نَصُّ السُّؤالِ التَّأمُّلِيِّ\", \"type\": \"REFLEXION\", \"reponseAttendue\": \"إِجَابَةٌ انْتِقَائِيَّةٌ\", \"reponseDetaillee\": \"شَرحٌ تَرْبَوِيٌّ\"}\n"
                    + "    ]\n"
                    + "  },\n"
                    + "  {\"titre\": \"عُنْوانُ الدَّرْسِ الثَّانِي\", \"contenu\": \"...\", \"questions\": [...]},\n"
                    + "  {\"titre\": \"عُنْوانُ الدَّرْسِ الثَّالِثِ\", \"contenu\": \"...\", \"questions\": [...]}\n"
                    + "]";
            String response = appelGroq(prompt, 4000, true);
            String cleaned = reparerJsonBrut(response);

            List<Map<String, Object>> lecons = new ArrayList<>();
            try {
                JsonNode root = objectMapper.readTree(cleaned);
                if (root.isObject()) {
                    root = objectMapper.createArrayNode().add(root);
                }
                if (root.isArray()) {
                    for (JsonNode node : root) {
                        String titre = node.path("titre").asText("").trim();
                        if (titre.isEmpty()) continue;
                        Map<String, Object> lecon = new HashMap<>();
                        lecon.put("titre", titre);
                        lecon.put("contenu", node.path("contenu").asText("").trim());

                        List<Map<String, Object>> questions = new ArrayList<>();
                        JsonNode qNodes = node.path("questions");
                        if (qNodes.isArray()) {
                            for (JsonNode q : qNodes) {
                                String texte = q.path("texte").asText("").trim();
                                if (texte.isEmpty()) continue;
                                Map<String, Object> qMap = new HashMap<>();
                                qMap.put("texte", texte);
                                qMap.put("type", q.path("type").asText("COMPREHENSION").trim().toUpperCase());
                                qMap.put("reponseAttendue", q.path("reponseAttendue").asText("").trim());
                                qMap.put("reponseDetaillee", q.path("reponseDetaillee").asText("").trim());
                                if (q.has("choix")) {
                                    qMap.put("choix", objectMapper.convertValue(q.get("choix"), List.class));
                                }
                                if (q.has("reponseCorrecte")) {
                                    qMap.put("reponseCorrecte", q.path("reponseCorrecte").asText("").trim());
                                }
                                questions.add(qMap);
                            }
                        }
                        lecon.put("questions", questions);
                        lecons.add(lecon);
                    }
                }
            } catch (Exception parseEx) {
                logger.error("Erreur parsing parcours complet JSON: {}", parseEx.getMessage());
                logger.error("الرد الخام: {}", cleaned);
                lecons = extraireLeconsDepuisTexte(cleaned);
            }
            if (!lecons.isEmpty()) {
                return lecons;
            }
            return null;
        } catch (Exception ex) {
            logger.error("Erreur Groq (Parcours complet): {}", ex.getMessage());
            return null;
        }
    }

    // ====================== ÉVALUATION RÉPONSE ÉTUDIANT ======================

    public Map<String, Object> evaluerReponse(String question, String reponseEtudiant, String reponseAttendue) {
        try {
            String prompt = "أنت «مُرشِد»، مُعَلِّمٌ تَرْبَوِيٌّ رَحِيمٌ ومُبدِعٌ. مُهِمَّتُكَ تَقْيِيمُ إِجَابَةِ طَالِبٍ بِطَرِيقَةٍ بَنَّاءَةٍ ومُلْهِمةٍ.\n\n"
                    + "السَّؤالُ: " + question + "\n"
                    + "الإِجَابَةُ المُتَوَقَّعَةُ (النَّمُوذَجِيَّة): " + reponseAttendue + "\n"
                    + "إِجَابَةُ الطَّالِبِ: " + reponseEtudiant + "\n\n"
                    + "تَعْلِيمَاتٌ صَارِمَةٌ:\n"
                    + "1) كُنْ مُحَفِّزاً: اِبدَأْ بِالكَلِمَاتِ الجَيِّدَةِ فِي إِجَابَةِ الطَّالِبِ، ثُمَّ شَرْحُ الخَطَأِ بِأُسْلُوبٍ لَطِيفٍ، ثُمَّ الإِصْحَاحُ بَدِيعٌ، وآخِراً تَحْدِيدٌ لِلخُطْوَةِ التَّالِيَةِ.\n"
                    + "2) أَعْطِ دَرَجَةً عَادِلَةً مِنْ 0 إِلَى 10 (10 = إِجَابَةٌ تَامَةٌ، 0 = غَائِبَةٌ) بِنَاءً عَلَى المُطَابَقَةِ مَعَ الإِجَابَةِ المُتَوَقَّعَةِ.\n"
                    + "3) حَدِّدْ صِحَّةَ الإِجَابَةِ (true/false) بِصَرَاحَةٍ.\n"
                    + "4) إذا كَانَتِ الإِجَابَةُ نَاقِصَةً، اذْكُرْ النَّقْصَ بِإِيجَازٍ وتَحْدِيدٌ مَا يَجِبُ أَنْ يُضافَ.\n"
                    + "5) كُنْ مُخْتَلِفاً فِي كُلِّ مَرَّةٍ: غَيِّرِ التَّعْبِيرَ، والكَلِمَاتِ، والنَّمْطَ لِكُلِّ تَقْيِيمٍ (لا تَكْرَرِ النَّصَّ).\n\n"
                    + "أَجِبْ بِصيغةِ JSON صالِحةٍ فَقط (دونَ نَصٍّ قَبْلَها أَوْ بَعْدَها) بِالهَيْكَلِ التَّالِي تَماماً: "
                    + "{\"evaluation\": \"نَصٌّ تَغْذِيَةٌ رَاجِعَةٌ مُفَصَّلَةٌ ومُلْهِمَةٌ\", \"points\": ٨, \"estCorrect\": true}.";
            String response = appelGroq(prompt, 1000, false);
            String cleanedResponse = reparerJsonBrut(response);

            try {
                Map<String, Object> evaluation = objectMapper.readValue(cleanedResponse, Map.class);

                evaluation.putIfAbsent("evaluation", "إجابة جيدة! واصل تقدّمك هكذا.");
                Object pointsObj = evaluation.get("points");
                int points = 7;
                if (pointsObj instanceof Number) {
                    points = ((Number) pointsObj).intValue();
                } else if (pointsObj instanceof String) {
                    try {
                        points = Integer.parseInt((String) pointsObj);
                    } catch (NumberFormatException e) {
                        // use default 7
                    }
                }
                points = Math.max(0, Math.min(10, points));
                evaluation.put("points", points);

                Object estCorrectObj = evaluation.get("estCorrect");
                boolean estCorrect = true;
                if (estCorrectObj instanceof Boolean) {
                    estCorrect = (Boolean) estCorrectObj;
                } else if (estCorrectObj instanceof String) {
                    estCorrect = Boolean.parseBoolean((String) estCorrectObj);
                }
                evaluation.put("estCorrect", estCorrect);

                return evaluation;
            } catch (Exception parseEx) {
                logger.error("Erreur parsing evaluation JSON: {}", parseEx.getMessage());
                logger.error("الرد الخام: {}", cleanedResponse);
                return Map.of(
                        "evaluation", "إجابة جيدة! واصل تقدّمك هكذا.",
                        "points", 7,
                        "estCorrect", true
                );
            }
        } catch (Exception ex) {
            logger.error("Erreur Groq (Evaluation): {}", ex.getMessage());
            return Map.of(
                    "evaluation", "إجابة جيدة! واصل تقدّمك هكذا.",
                    "points", 7,
                    "estCorrect", true
            );
        }
    }

    // ====================== APPEL GROQ (1 APPEL) ======================

    @SuppressWarnings("unchecked")
    private String appelGroq(String prompt, int maxTokens) {
        return appelGroq(prompt, maxTokens, false);
    }

    @SuppressWarnings("unchecked")
    private String appelGroq(String prompt, int maxTokens, boolean forceJson) {
        Exception lastEx = null;
        for (int attempt = 0; attempt < 2; attempt++) {
            try {
                return appelGroqUnsafe(prompt, maxTokens, forceJson);
            } catch (Exception ex) {
                lastEx = ex;
                logger.warn("Tentative Groq #{} échouée: {}", (attempt + 1), ex.getMessage());
            }
        }
        throw new RuntimeException("خطأ واجهة Groq: " + (lastEx != null ? lastEx.getMessage() : "échec"));
    }

    @SuppressWarnings("unchecked")
    private String appelGroqUnsafe(String prompt, int maxTokens, boolean forceJson) {
        if (groqApiKey == null || groqApiKey.isBlank()) {
            throw new IllegalStateException("Clé API Groq manquante (GROQ_API_KEY non configurée).");
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(groqApiKey);

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", model);
        requestBody.put("temperature", 0.8);
        requestBody.put("max_tokens", maxTokens);
        if (forceJson) {
            requestBody.put("response_format", Map.of("type", "json_object"));
        }
        requestBody.put("messages", List.of(
                Map.of("role", "user", "content", prompt)
        ));

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

        ResponseEntity<Map> response = restTemplate.postForEntity(
                groqApiUrl,
                entity,
                Map.class
        );

        if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
            Object choicesObj = response.getBody().get("choices");
            if (choicesObj instanceof List<?> choices && !choices.isEmpty()) {
                Object first = choices.get(0);
                if (first instanceof Map<?, ?> choiceMap) {
                    Object messageObj = choiceMap.get("message");
                    if (messageObj instanceof Map<?, ?> messageMap) {
                        Object content = messageMap.get("content");
                        if (content != null) {
                            return content.toString();
                        }
                    }
                }
            }
        }
        throw new RuntimeException("Réponse Groq invalide ou vide (statut: " + response.getStatusCode() + ").");
    }

    // ====================== NETTOYAGE JSON ======================

    private String nettoyerReponsePourJson(String response) {
        if (response == null) return "";
        String cleaned = response.trim();

        cleaned = cleaned.replaceAll("^```json\\s*", "").replaceAll("^```\\s*", "")
                .replaceAll("\\s*```$", "");

        int startJson = Math.max(cleaned.indexOf('['), cleaned.indexOf('{'));
        if (startJson == -1) return cleaned;

        int endJson = -1;
        if (cleaned.charAt(startJson) == '[') {
            endJson = cleaned.lastIndexOf(']');
        } else {
            endJson = cleaned.lastIndexOf('}');
        }

        if (endJson == -1 || endJson < startJson) return cleaned;

        return cleaned.substring(startJson, endJson + 1).trim();
    }

    private String reparerJsonBrut(String brut) {
        if (brut == null || brut.isBlank()) return "";
        String s = brut.trim();
        s = s.replaceAll("^```json\\s*", "").replaceAll("^```\\s*", "")
                .replaceAll("\\s*```$", "");
        int start = Math.max(s.indexOf('['), s.indexOf('{'));
        if (start == -1) return s;
        int end = -1;
        if (s.charAt(start) == '[') {
            end = s.lastIndexOf(']');
        } else {
            end = s.lastIndexOf('}');
        }
        if (end == -1 || end < start) return s;
        return s.substring(start, end + 1).trim();
    }

    private List<Map<String, Object>> extraireLeconsDepuisTexte(String texte) {
        List<Map<String, Object>> lecons = new ArrayList<>();
        if (texte == null || texte.isBlank()) return lecons;
        String[] blocs = texte.split("\\n\\s*\\n");
        String titreEnCours = "";
        StringBuilder contenuEnCours = new StringBuilder();
        for (String bloc : blocs) {
            String ligne = bloc.trim();
            if (ligne.startsWith("الدرس") || ligne.startsWith("درس") || ligne.startsWith("###") || ligne.startsWith("- ")) {
                if (!titreEnCours.isBlank() && contenuEnCours.length() > 20) {
                    Map<String, Object> lecon = new HashMap<>();
                    lecon.put("titre", titreEnCours);
                    lecon.put("contenu", contenuEnCours.toString().trim());
                    lecon.put("questions", new ArrayList<>());
                    lecons.add(lecon);
                }
                titreEnCours = ligne.replaceAll("^[-#*\\s]+", "").trim();
                contenuEnCours.setLength(0);
            } else if (!ligne.isBlank() && !ligne.startsWith("```") && !ligne.startsWith("{")) {
                contenuEnCours.append(ligne).append("\n");
            }
        }
        if (!titreEnCours.isBlank() && contenuEnCours.length() > 20) {
            Map<String, Object> lecon = new HashMap<>();
            lecon.put("titre", titreEnCours);
            lecon.put("contenu", contenuEnCours.toString().trim());
            lecon.put("questions", new ArrayList<>());
            lecons.add(lecon);
        }
        return lecons;
    }

    // ====================== FALLBACKS (secours uniquement) ======================

    public List<Map<String, Object>> getFallbackPlanComplet(String matiere, int niveau) {
        List<Map<String, String>> planLecons = getFallbackPlanLecons(matiere, niveau);
        List<Map<String, Object>> result = new ArrayList<>();
        for (Map<String, String> l : planLecons) {
            Map<String, Object> lecon = new HashMap<>();
            String titre = l.getOrDefault("titre", "درس في " + matiere);
            lecon.put("titre", titre);
            lecon.put("contenu", getFallbackContenuLecon(matiere, titre));
            lecon.put("questions", getFallbackQuestions(matiere, titre));
            result.add(lecon);
        }
        return result;
    }

    public String getFallbackContenuLecon(String matiere, String titreLecon) {
        return "يتناول هذا الدرس التفاعلي بالتفصيل: " + titreLecon + ". ستتعلّم فيه الأسس الضرورية لتطوير معرفتك في " + matiere
                + " من خلال شرح مبسّط، أمثلة عملية، وربط المفاهيم بتطبيقات الحياة اليومية.";
    }

    public List<Map<String, Object>> getFallbackQuestions(String matiere, String titreLecon) {
        List<List<Map<String, Object>>> variantes = List.of(
                List.of(
                        Map.of("texte", "ما هي المفاهيم الأساسية لـ '" + titreLecon + "' ؟",
                                "type", "COMPREHENSION",
                                "reponseAttendue", "فهم أسس " + matiere,
                                "reponseDetaillee", "شرح المبادئ الأساسية."),
                        Map.of("texte", "كيف يمكن تطبيق هذه المفاهيم في الحياة اليومية؟",
                                "type", "APPLICATION",
                                "reponseAttendue", "تطبيق عملي للتعاليم",
                                "reponseDetaillee", "أمثلة للتطبيق في الحياة اليومية.")
                ),
                List.of(
                        Map.of("texte", "ما أهمية درس '" + titreLecon + "' في مادة " + matiere + "؟",
                                "type", "REFLEXION",
                                "reponseAttendue", "أهمية الدرس في بناء المعرفة",
                                "reponseDetaillee", "تأمّل في قيمة الدرس وأثره."),
                        Map.of("texte", "اذكر مثالاً عملياً مستلهماً من '" + titreLecon + "'.",
                                "type", "APPLICATION",
                                "reponseAttendue", "مثال تطبيقي واضح",
                                "reponseDetaillee", "توضيح المثال ودلالته.")
                )
        );
        return new ArrayList<>(variantes.get(ThreadLocalRandom.current().nextInt(variantes.size())));
    }

    private List<Map<String, String>> getFallbackPlanLecons(String matiere, int niveau) {
        Map<String, List<String[]>> parMatiere = new LinkedHashMap<>();
        parMatiere.put("tajweed", List.of(
                new String[]{"مقدمة في مخارج الحروف وصفاتها", "التعرّف على مخارج الحروف وصفاتها الأساسية"},
                new String[]{"أحكام النون الساكنة والتنوين", "إتقان الإظهار والإدغام والإقلاب والإخفاء"},
                new String[]{"أحكام المد والوقف", "ضبط أحكام المدود وأنواع الوقف"}
        ));
        parMatiere.put("fiqh", List.of(
                new String[]{"مقدمة في الطهارة وأحكام الوضوء", "فهم شروط وأركان الوضوء"},
                new String[]{"أركان الصلاة وشروطها", "إتقان هيكل الصلاة وشروط صحّتها"},
                new String[]{"أحكام الصيام والزكاة", "التعرّف على أحكام الصيام والزكاة"}
        ));
        parMatiere.put("hadith", List.of(
                new String[]{"مقدمة في الأربعين النووية", "فهم النيّة والإخلاص في العمل"},
                new String[]{"منهجية تصنيف الحديث", "التمييز بين الصحيح والحسن والضعيف"},
                new String[]{"دراسة تطبيقية لأحاديث الأخلاق", "تطبيق أخلاق الحديث في الحياة"}
        ));
        parMatiere.put("tafsir", List.of(
                new String[]{"مقدمة في علم التفسير", "فهم أسباب النزول وقواعد التفسير"},
                new String[]{"تفسير سورة الفاتحة", "تدبّر معاني سورة الفاتحة"},
                new String[]{"تفسير السور القصار", "فهم المعوذات والإخلاص"}
        ));

        List<String[]> base = parMatiere.getOrDefault(matiere.toLowerCase(), List.of(
                new String[]{"مقدمة في المبادئ الأساسية", "التعرّف على المفاهيم الأساسية"},
                new String[]{"التعمّق العملي في القواعد", "تطبيق القواعد عملياً"},
                new String[]{"حصيلة شاملة وتلخيص", "ترسيخ المعلومات وتلخيصها"}
        ));

        List<Map<String, String>> lecons = new ArrayList<>();
        for (String[] pair : base) {
            Map<String, String> m = new HashMap<>();
            m.put("titre", pair[0]);
            m.put("objectif", pair[1]);
            lecons.add(m);
        }
        return lecons;
    }

    private String getFallbackParcoursPlan(String matiere, int niveau) {
        List<String> variantes = List.of(
            "خطة دراسية منظّمة في " + matiere + " (المستوى " + niveau + ") : 1. الأسس والمبادئ، 2. التطبيق العملي والقواعد، 3. الإتقان المتقدّم والمراجعة.",
            "مسار تعلّم تدريجي في " + matiere + " يبدأ من المستوى " + niveau + " : 1. التمهيد والمفاهيم، 2. التدريب والتطبيق، 3. التخصّص والإتقان.",
            "برنامج تعليمي في " + matiere + " (المستوى " + niveau + ") : 1. المدخلات الأساسية، 2. الممارسة الموجّهة، 3. التقييم والترسيخ."
        );
        return variantes.get(ThreadLocalRandom.current().nextInt(variantes.size()));
    }
}
