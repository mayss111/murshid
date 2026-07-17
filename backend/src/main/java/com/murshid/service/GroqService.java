package com.murshid.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

/**
 * Service d'intelligence artificielle basé sur l'API Groq (compatible OpenAI).
 * Toute la génération de parcours, de cours et de questions passe par ce service.
 * Un fallback enrichi et variable est conservé uniquement en dernier recours si
 * l'API est indisponible.
 */
@Service
public class GroqService {

    private static final Logger logger = LoggerFactory.getLogger(GroqService.class);

    @Value("${groq.api.url:https://api.groq.com/openai/v1/chat/completions}")
    private String groqApiUrl;

    @Value("${groq.api.key:}")
    private String groqApiKey;

    @Value("${groq.api.key.generation:}")
    private String groqApiKeyGeneration;

    @Value("${groq.model:llama-3.3-70b-versatile}")
    private String model;

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();

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
            String response = appelGroqGeneration(prompt, 1500);
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
                // Le modèle a répondu en texte libre: on l'utilise tel quel.
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
     * Génère dynamiquement le plan de leçons (titres + objectifs) pour une matière,
     * via l'IA. En cas d'échec, renvoie un plan de secours variable.
     */
    public List<Map<String, String>> genererPlanLecons(String matiere, int niveau) {
        try {
            String prompt = "أنت «مُرشِد»، مُصمّم مسارات تعليمية إسلامية. "
                + "لمادة '" + matiere + "' بالمستوى " + niveau + "، "
                + "اقترح 3 دروس رئيسية متسلسلة ومُتنوّعة تماماً. "
                + "لكل درس: عنوان دقيق وجذّاب، وهدف تربوي واحد ملموس. "
                + "اجعل العناوين فريدة ومختلفة جذرياً بين الدروس.\n\n"
                + "أجب باللغة العربية الفصحى وبصيغة JSON صالحة فقط (دون أي نص قبلها أو بعدها، ودون ```json) بالهيكل التالي تماماً:\n"
                + "[\n"
                + "  {\"titre\": \"عنوان الدرس الأول\", \"objectif\": \"هدف الدرس الأول\"},\n"
                + "  {\"titre\": \"عنوان الدرس الثاني\", \"objectif\": \"هدف الدرس الثاني\"},\n"
                + "  {\"titre\": \"عنوان الدرس الثالث\", \"objectif\": \"هدف الدرس الثالث\"}\n"
                + "]";
            String response = appelGroqGeneration(prompt, 1000);
            String cleaned = nettoyerReponsePourJson(response);

            List<Map<String, String>> lecons = new ArrayList<>();
            try {
                JsonNode root = objectMapper.readTree(cleaned);
                if (root.isObject()) {
                    root = objectMapper.createArrayNode().add(root);
                }
                if (root.isArray()) {
                    for (JsonNode node : root) {
                        String t = node.path("titre").asText("").trim();
                        String o = node.path("objectif").asText("").trim();
                        if (!t.isEmpty()) {
                            Map<String, String> m = new HashMap<>();
                            m.put("titre", t);
                            m.put("objectif", o);
                            lecons.add(m);
                        }
                    }
                }
            } catch (Exception parseEx) {
                logger.error("Erreur parsing plan leçons JSON: {}", parseEx.getMessage());
            }
            if (!lecons.isEmpty()) {
                return lecons;
            }
            return getFallbackPlanLecons(matiere, niveau);
        } catch (Exception ex) {
            logger.error("Erreur Groq (Plan leçons): {}", ex.getMessage());
            return getFallbackPlanLecons(matiere, niveau);
        }
    }

    public String genererContenuLecon(String matiere, int niveau, String titreLecon) {
        try {
            String prompt = "أنت «مُرشِد»، عالِمٌ ومُعَلِّمٌ إسلاميٌّ متميّز. "
                + "مُهِمَّتُكَ: كِتَابَةُ مَحتوى دَرْسٍ كامِلٍ ومُفصَّلٍ ومُمتِعٍ لِموضوع: «" + titreLecon + "» "
                + "في مادة " + matiere + " للمستوى " + niveau + ".\n\n"
                + "هَيْكَلُ الدَّرْسِ المَطلُوبِ:\n"
                + "1) بَدْءٌ مُشَوِّقٌ: سُؤالٌ جَذَّابٌ أو حَدِيثٌ نَبَوِيٌّ شَرِيفٌ أو آيَةٌ كَرِيمَةٌ مُختَارةٌ بِذِكْرِ المَصْدَرِ.\n"
                + "2) شَرحُ المَفَاهِيمِ: تَعْريفاتٌ مُبَسَّطَةٌ ومَفَاهِيمٌ أَسَاسِيَّةٌ بِأَسْلوبٍ سَهْلٍ ومُشَوِّقٍ.\n"
                + "3) أَمثِلَةٌ تَطْبِيقِيَّةٌ: أَمثِلَةٌ مِنَ الحَياةِ اليَوْمِيَّةِ مَرْبُوطَةٌ بِالمَادةِ.\n"
                + "4) شَوَاهِدُ شَرْعِيَّةٌ: آياتٌ أَوْ أَحَادِيثٌ صَحِيحَةٌ مَعَ ذِكْرِ المَصْدَرِ (مِصْحَفٌ/صَحِيحٌ).\n"
                + "5) تَطْبِيقٌ عَمَلِيٌّ: خُطْوَاتٌ مُوَضَّحَةٌ لِكَيْفِيَّةِ التَّطْبِيقِ.\n"
                + "6) خَاتِمَةٌ وتَلْخِيصٌ: أهَمُّ النَّقَاطِ في فِقْرَاتٍ مَرْقُومَةٍ، وتَحْدِيدٌ لِلخُطْوَةِ التَّالِيَةِ.\n\n"
                + "شَرُوطَاتٌ:\n"
                + "- لُغةٌ عَربيةٌ فُصْحَى، أُسْلُوبٌ دَافِئٌ وتَشْجِيعِيٌّ.\n"
                + "- 350-500 كَلِمةٍ.\n"
                + "- لا تُضِفْ مُقَدِّمَةً أَوْ خَاتِمَةً خَارِجَ الهَيْكَلِ.\n"
                + "- كُنْ مُبْدِعاً: غَيِّرِ التَّرْتِيبَ، الأمثِلَةَ، واللَّفْظَاتِ مَعَ كُلِّ دَرْسٍ.";
            String response = appelGroqGeneration(prompt, 3000);
            if (response != null && !response.trim().isEmpty()) {
                return response.trim();
            }
            return getFallbackContenuLecon(matiere, titreLecon);
        } catch (Exception ex) {
            logger.error("خطأ Groq (محتوى الدرس): {}", ex.getMessage());
            return getFallbackContenuLecon(matiere, titreLecon);
        }
    }

    public List<Map<String, Object>> genererQuestionsLecon(String matiere, int niveau, String titreLecon, String contenuLecon, int nombreQuestions) {
        try {
            String prompt = "أنت «مُرشِد»، مُصمّم أسئلة تعليمية إسلامية مُبتكرة. "
                + "إليك محتوى الدرس:\n--- بداية المحتوى ---\n" + contenuLecon + "\n--- نهاية المحتوى ---\n\n"
                + "المهمة: أنشئ بالضبط " + nombreQuestions + " أسئلة مُتنوّعة تماماً ومُختلفة جذرياً في الصياغة، "
                + "مَبْنِيَّةً فقط على المحتوى السابق.\n"
                + "أنواع الأسئلة المطلوبة (مزيج متنوّع):\n"
                + "- COMPREHENSION: سؤال فهم مباشر.\n"
                + "- APPLICATION: سؤال تطبيقي «ماذا تفعل إذا...؟».\n"
                + "- REFLEXION: سؤال تأمّلي «لماذا...؟» أو «كيف...؟».\n"
                + "- QCM: سؤال اختيار من متعدّد مع 4 خيارات.\n\n"
                + "شروط صارمة:\n"
                + "- لا تُكرّر نفس الصياغة أو نفس المفهوم.\n"
                + "- الإجابة المتوقّعة يجب أن تكون دقيقة ومبنية على المحتوى فقط.\n"
                + "- الشرح التربوي يجب أن يكون مُفصّلاً ومُحبّباً.\n\n"
                + "أجب باللغة العربية الفصحى وبصيغة JSON صالحة فقط (دون أي نص قبلها أو بعدها، ودون ```json) بالهيكل التالي تماماً:\n"
                + "[\n"
                + "  {\"texte\": \"نص السؤال\", \"type\": \"COMPREHENSION\", \"reponseAttendue\": \"الإجابة\", \"reponseDetaillee\": \"شرح تفصيلي\"},\n"
                + "  {\"texte\": \"نص السؤال\", \"type\": \"APPLICATION\", \"reponseAttendue\": \"...\", \"reponseDetaillee\": \"...\"}\n"
                + "]";
            String response = appelGroqGeneration(prompt, 2500);
            String cleanedResponse = nettoyerReponsePourJson(response);

            try {
                JsonNode root = objectMapper.readTree(cleanedResponse);
                if (root == null || root.isNull()) {
                    throw new RuntimeException("Réponse JSON vide");
                }
                if (root.isObject()) {
                    root = objectMapper.createArrayNode().add(root);
                }
                if (!root.isArray()) {
                    throw new RuntimeException("Réponse JSON ni objet ni tableau");
                }
                List<Map<String, Object>> questions = new ArrayList<>();
                for (JsonNode q : root) {
                    Map<String, Object> map = new HashMap<>();
                    map.put("texte", q.path("texte").asText("").trim());
                    String typeStr = q.path("type").asText("COMPREHENSION").trim().toUpperCase();
                    map.put("type", typeStr);
                    map.put("reponseAttendue", q.path("reponseAttendue").asText("").trim());
                    map.put("reponseDetaillee", q.path("reponseDetaillee").asText("").trim());
                    // Validation des champs obligatoires
                    if (((String) map.get("texte")).isBlank()) {
                        continue;
                    }
                    map.putIfAbsent("reponseAttendue", "إجابة قائمة على مبادئ الدرس.");
                    map.putIfAbsent("reponseDetaillee", "شرح مفصّل للمفاهيم الأساسية للدرس.");
                    questions.add(map);
                }
                if (!questions.isEmpty()) {
                    return questions;
                }
                return getFallbackQuestions(matiere, titreLecon);
            } catch (Exception parseEx) {
                logger.error("Erreur parsing questions JSON: {}", parseEx.getMessage());
                logger.error("الرد الخام: {}", cleanedResponse);
                return getFallbackQuestions(matiere, titreLecon);
            }
        } catch (Exception ex) {
            logger.error("خطأ Groq (أسئلة الدرس): {}", ex.getMessage());
            return getFallbackQuestions(matiere, titreLecon);
        }
    }

    public Map<String, Object> evaluerReponse(String question, String reponseEtudiant, String reponseAttendue) {
        try {
            String prompt = "أنت «مُرشِد»، مُعَلِّمٌ تَرْبَوِيٌّ رَحِيمٌ ومُبدِعٌ. "
                + "مَهِمَّتُكَ تَقْيِيمُ إِجَابَةِ طَالِبٍ بِطَرِيقَةٍ بَنَّاءَةٍ ومُلْهِمةٍ.\n\n"
                + "السَّؤالُ: " + question + "\n"
                + "الإِجَابَةُ المُتَوَقَّعَةُ (النَّمُوذَجِيَّة): " + reponseAttendue + "\n"
                + "إِجَابَةُ الطَّالِبِ: " + reponseEtudiant + "\n\n"
                + "تَعْلِيمَاتٌ صَارِمَةٌ:\n"
                + "1) اِبْدَأْ بِالكَلِمَاتِ الجَيِّدَةِ فِي إِجَابَةِ الطَّالِبِ، ثُمَّ شَرْحُ الخَطَأِ بِأُسْلُوبٍ لَطِيفٍ، ثُمَّ الإِصْحَاحُ بَدِيعٌ، وآخِراً تَحْدِيدٌ لِلخُطْوَةِ التَّالِيَةِ.\n"
                + "2) أَعْطِ دَرَجَةً عَادِلَةً مِنْ 0 إِلَى 10 (10 = إِجَابَةٌ تَامَةٌ، 0 = غَائِبَةٌ) بِنَاءً عَلَى المُطَابَقَةِ مَعَ الإِجَابَةِ المُتَوَقَّعَةِ.\n"
                + "3) حَدِّدْ صِحَّةَ الإِجَابَةِ (true/false) بِصَرَاحَةٍ.\n"
                + "4) إذا كَانَتِ الإِجَابَةُ نَاقِصَةً، اذْكُرْ النَّقْصَ بِإِيجَازٍ وتَحْدِيدٌ مَا يَجِبُ أَنْ يُضافَ.\n"
                + "5) كُنْ مُخْتَلِفاً فِي كُلِّ مَرَّةٍ: غَيِّرِ التَّعْبِيرَ، والكَلِمَاتِ، والنَّمْطَ لِكُلِّ تَقْيِيمٍ (لا تَكْرَرِ النَّصَّ).\n\n"
                + "أَجِبْ بِصيغةِ JSON صالِحةٍ فَقط (دونَ نَصٍّ قَبْلَها أَوْ بَعْدَها) بِالهَيْكَلِ التَّالِي تَماماً: "
                + "{\"evaluation\": \"نَصٌّ تَغْذِيَةٌ رَاجِعَةٌ مُفَصَّلَةٌ ومُلْهِمَةٌ\", \"points\": ٨, \"estCorrect\": true}.";
            String response = appelGroqGeneration(prompt, 1000);
            String cleanedResponse = nettoyerReponsePourJson(response);

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

    @SuppressWarnings("unchecked")
    private String appelGroq(String prompt, int maxTokens, String apiKey) {
        String keyToUse = (apiKey != null && !apiKey.isBlank()) ? apiKey : groqApiKey;
        if (keyToUse == null || keyToUse.isBlank()) {
            throw new IllegalStateException("Clé API Groq manquante.");
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(keyToUse);

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", model);
        requestBody.put("temperature", 0.8);
        requestBody.put("max_tokens", maxTokens);
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

    @SuppressWarnings("unchecked")
    private String appelGroq(String prompt, int maxTokens) {
        return appelGroq(prompt, maxTokens, groqApiKey);
    }

    private String appelGroq(String prompt) {
        return appelGroq(prompt, 1500, groqApiKey);
    }

    private String appelGroqGeneration(String prompt, int maxTokens) {
        List<String> keys = new ArrayList<>();
        if (groqApiKeyGeneration != null && !groqApiKeyGeneration.isBlank()) {
            keys.add(groqApiKeyGeneration);
        }
        if (groqApiKey != null && !groqApiKey.isBlank()) {
            keys.add(groqApiKey);
        }
        if (keys.isEmpty()) {
            throw new IllegalStateException("Clé API Groq manquante pour la génération.");
        }

        RuntimeException lastEx = null;
        for (String key : keys) {
            try {
                return appelGroq(prompt, maxTokens, key);
            } catch (Exception ex) {
                lastEx = new RuntimeException("Échec avec une clé Groq: " + ex.getMessage(), ex);
            }
        }
        throw lastEx != null ? lastEx : new RuntimeException("Échec génération Groq.");
    }

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
        try {
            if (groqApiKey == null || groqApiKey.isBlank()) {
                throw new IllegalStateException("Clé API Groq manquante.");
            }

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
        } catch (Exception ex) {
            logger.error("Erreur Groq (Chat): {}", ex.getMessage());
            return "عذراً، لم أتمكّن من الردّ في هذه اللحظة. حاول مرة أخرى بعد قليل.";
        }
    }

    // ====================== FALLBACKS (secours uniquement) ======================

    private String getFallbackParcoursPlan(String matiere, int niveau) {
        List<String> variantes = List.of(
            "خطة دراسية منظّمة في " + matiere + " (المستوى " + niveau + ") : 1. الأسس والمبادئ، 2. التطبيق العملي والقواعد، 3. الإتقان المتقدّم والمراجعة.",
            "مسار تعلّم تدريجي في " + matiere + " يبدأ من المستوى " + niveau + " : 1. التمهيد والمفاهيم، 2. التدريب والتطبيق، 3. التخصّص والإتقان.",
            "برنامج تعليمي في " + matiere + " (المستوى " + niveau + ") : 1. المدخلات الأساسية، 2. الممارسة الموجّهة، 3. التقييم والترسيخ."
        );
        return variantes.get(ThreadLocalRandom.current().nextInt(variantes.size()));
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

    public String getFallbackContenuLecon(String matiere, String titreLecon) {
        List<String> variantes = List.of(
            "يتناول هذا الدرس بالتفصيل: " + titreLecon + ". ستتعلّم فيه الأسس الضرورية لتطوير معرفتك في " + matiere
                + " من خلال شرح مبسّط، أمثلة عملية، وربط المفاهيم بتطبيقات الحياة اليومية.",
            "في هذا الدرس: " + titreLecon + "، نستعرض المفاهيم الأساسية في " + matiere
                + " مع شواهد شرعية وأمثلة تطبيقية، لتتمكّن من التطبيق العملي في حياتك.",
            "يُعالج هذا الدرس موضوع «" + titreLecon + "» في مادة " + matiere
                + "، ويهدف إلى ترسيخ الفهم الصحيح من خلال مناقشة Qinquiries عملية وتمارين تربوية."
        );
        return variantes.get(ThreadLocalRandom.current().nextInt(variantes.size()));
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
            ),
            List.of(
                Map.of("texte", "أي من التالي يُعدّ من أسس '" + titreLecon + "'؟",
                    "type", "QCM",
                    "reponseAttendue", "الخيار الصحيح",
                    "reponseDetaillee", "توضيح الخيار الصحيح والبدائل الخاطئة.",
                    "choix", "أ) خيار أول|||ب) خيار ثاني|||ج) خيار ثالث|||د) خيار رابع",
                    "reponseCorrecte", "أ) خيار أول"),
                Map.of("texte", "ما هو التطبيق العملي الأكثر ارتباطاً بـ '" + titreLecon + "' في حياتك؟",
                    "type", "APPLICATION",
                    "reponseAttendue", "تطبيق عملي",
                    "reponseDetaillee", "شرح كيف يمكن تطبيق المفهوم عملياً.")
            )
        );
        return new ArrayList<>(variantes.get(ThreadLocalRandom.current().nextInt(variantes.size())));
    }
}
