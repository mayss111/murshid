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

    @Value("${groq.model:llama-3.3-70b-versatile}")
    private String model;

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();

    public String genererParcours(String matiere, int niveauActuel) {
        try {
            String prompt = "أنت معلّم إسلامي متميّز. صمّم خطة تعلّم منظّمة ومُلهمة لمادة '" + matiere
                + "' من المستوى " + niveauActuel + " إلى المستوى " + (niveauActuel + 4) + ". "
                + "حدّد 3 دروس رئيسية متسلسلة، لكل درس عنوان جذّاب وأهداف واضحة. "
                + "أجب باللغة العربية الفصحى وبصيغة JSON صالحة فقط (دون أي نص قبلها أو بعدها، ودون ```json) بالهيكل التالي تماماً:\n"
                + "{\n"
                + "  \"titre\": \"عنوان المسار\",\n"
                + "  \"description\": \"وصف موجز ومُلهم للمسار\",\n"
                + "  \"lecons\": [\n"
                + "    {\"titre\": \"عنوان الدرس الأول\", \"objectifs\": \"أهداف الدرس الأول\"},\n"
                + "    {\"titre\": \"عنوان الدرس الثاني\", \"objectifs\": \"أهداف الدرس الثاني\"},\n"
                + "    {\"titre\": \"عنوان الدرس الثالث\", \"objectifs\": \"أهداف الدرس الثالث\"}\n"
                + "  ]\n"
                + "}";
            String response = appelGroq(prompt, 1500);
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
     * Génère tout le parcours (leçons + contenu + questions) en UN SEUL appel Groq.
     * Évite les appels en chaîne qui timeout/rate-limit sur le free-tier.
     * Renvoie une liste de leçons, chacune avec son contenu et ses questions.
     * Renvoie null si l'IA échoue (pour utiliser le fallback).
     */
    public List<Map<String, Object>> genererParcoursComplet(String matiere, int niveau) {
        try {
            String prompt = "أنت معلّم إسلامي متميّز. صمّم مسار تعلّم كاملاً لمادة '" + matiere
                + "' (المستوى " + niveau + "). "
                + "أنشئ 3 دروس متسلسلة. لكل درس: عنوان، محتوى درسي مفصّل ومُلهم (بين 200 و400 كلمة، "
                + "بالأسلوب التربوي: مقدمة، شرح المفاهيم، أمثلة، آيات/أحاديث، تطبيق، خاتمة)، "
                + "ثم 3 أسئلة متنوّعة (COMPREHENSION، APPLICATION، REFLEXION) مبنية على المحتوى. "
                + "أجب باللغة العربية الفصحى وبصيغة JSON صالحة فقط (دون أي نص قبلها أو بعدها، ودون ```json) بالهيكل التالي تماماً:\n"
                + "[\n"
                + "  {\n"
                + "    \"titre\": \"عنوان الدرس الأول\",\n"
                + "    \"contenu\": \"محتوى الدرس الأول المفصّل...\",\n"
                + "    \"questions\": [\n"
                + "      {\"texte\": \"السؤال الأول\", \"type\": \"COMPREHENSION\", \"reponseAttendue\": \"الإجابة\", \"reponseDetaillee\": \"الشرح\"},\n"
                + "      {\"texte\": \"السؤال الثاني\", \"type\": \"APPLICATION\", \"reponseAttendue\": \"...\", \"reponseDetaillee\": \"...\"},\n"
                + "      {\"texte\": \"السؤال الثالث\", \"type\": \"REFLEXION\", \"reponseAttendue\": \"...\", \"reponseDetaillee\": \"...\"}\n"
                + "    ]\n"
                + "  },\n"
                + "  {\"titre\": \"عنوان الدرس الثاني\", \"contenu\": \"...\", \"questions\": [...]},\n"
                + "  {\"titre\": \"عنوان الدرس الثالث\", \"contenu\": \"...\", \"questions\": [...]}\n"
                + "]";
            String response = appelGroq(prompt, 4000);
            String cleaned = nettoyerReponsePourJson(response);

            List<Map<String, Object>> lecons = new ArrayList<>();
            try {
                JsonNode root = objectMapper.readTree(cleaned);
                if (root.isObject()) {
                    root = objectMapper.createArrayNode().add(root);
                }
                if (root.isArray()) {
                    for (JsonNode node : root) {
                        Map<String, Object> lecon = new HashMap<>();
                        String titre = node.path("titre").asText("").trim();
                        if (titre.isEmpty()) {
                            continue;
                        }
                        lecon.put("titre", titre);
                        lecon.put("contenu", node.path("contenu").asText("").trim());
                        List<Map<String, Object>> questions = new ArrayList<>();
                        JsonNode qNodes = node.path("questions");
                        if (qNodes.isArray()) {
                            for (JsonNode q : qNodes) {
                                Map<String, Object> qMap = new HashMap<>();
                                String texte = q.path("texte").asText("").trim();
                                if (texte.isEmpty()) {
                                    continue;
                                }
                                qMap.put("texte", texte);
                                qMap.put("type", q.path("type").asText("COMPREHENSION").trim().toUpperCase());
                                qMap.put("reponseAttendue", q.path("reponseAttendue").asText("").trim());
                                qMap.put("reponseDetaillee", q.path("reponseDetaillee").asText("").trim());
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

    /**
     * Génère dynamiquement le plan de leçons (titres + objectifs) pour une matière,
     * via l'IA. En cas d'échec, renvoie un plan de secours variable.
     */
    public List<Map<String, String>> genererPlanLecons(String matiere, int niveau) {
        try {
            String prompt = "أنت معلّم إسلامي متميّز. لمادة '" + matiere + "' (المستوى " + niveau + ")، "
                + "اقترح 3 دروس رئيسية متسلسلة ومُتنوّعة. لكل درس عنوان دقيق وهدف تربوي واحد. "
                + "أجب باللغة العربية الفصحى وبصيغة JSON صالحة فقط (دون أي نص قبلها أو بعدها، ودون ```json) بالهيكل التالي تماماً:\n"
                + "[\n"
                + "  {\"titre\": \"عنوان الدرس الأول\", \"objectif\": \"هدف الدرس الأول\"},\n"
                + "  {\"titre\": \"عنوان الدرس الثاني\", \"objectif\": \"هدف الدرس الثاني\"},\n"
                + "  {\"titre\": \"عنوان الدرس الثالث\", \"objectif\": \"هدف الدرس الثالث\"}\n"
                + "]";
            String response = appelGroq(prompt, 1000);
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
            String prompt = "أنت عالم ومعلّم إسلامي متميّز ومجيد للتعليم في مادة " + matiere + ". "
                + "اكتب محتوى درس كاملاً ومنظّماً وتربوياً ومُفصّلاً للدرس: '" + titreLecon + "' بالمستوى " + niveau + ". "
                + "هيكل المحتوى كما يلي:\n"
                + "1. مقدمة واضحة وجذّابة\n"
                + "2. شرح المفاهيم الأساسية بتعريفات مبسّطة\n"
                + "3. أمثلة عملية وملموسة\n"
                + "4. آيات قرآنية و/أو أحاديث مناسبة (مع المصادر إن أمكن)\n"
                + "5. التطبيق في الحياة اليومية\n"
                + "6. خاتمة وتلخيص لأهم النقاط\n\n"
                + "يجب أن يكون الأسلوب دافئاً وتشجيعياً وسهلاً. استخدم لغة بسيطة ودقيقة. "
                + "أجب باللغة العربية الفصحى وبالمحتوى الدرسي فقط، دون مقدمة أو خاتمة إضافية.";
            String response = appelGroq(prompt, 3000);
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
            String prompt = "أنت عالم ومعلّم إسلامي متميّز ومجيد للتعليم في مادة " + matiere + ". "
                + "إليك محتوى الدرس:\n"
                + "--- بداية المحتوى ---\n" + contenuLecon + "\n--- نهاية المحتوى ---\n\n"
                + "بالنسبة لهذا الدرس: '" + titreLecon + "' بالمستوى " + niveau + "، أنشئ بالضبط " + nombreQuestions + " أسئلة متنوّعة ومُختلفة: "
                + "مزيج من الأسئلة (COMPREHENSION، APPLICATION، REFLEXION، QCM). "
                + "يجب أن تكون كل أسئلة فريدة ومبنية فقط على محتوى الدرس المقدّم، بصياغات متنوّعة. "
                + "أجب باللغة العربية الفصحى وبصيغة JSON صالحة فقط (دون أي نص قبلها أو بعدها، ودون ```json) بالهيكل التالي تماماً:\n"
                + "[\n"
                + "  {\"texte\": \"نص السؤال بالعربية الفصحى\", \"type\": \"COMPREHENSION\", \"reponseAttendue\": \"الإجابة المتوقّعة الكاملة\", \"reponseDetaillee\": \"شرح تربوي مفصّل\"},\n"
                + "  {\"texte\": \"سؤال آخر مختلف\", \"type\": \"APPLICATION\", \"reponseAttendue\": \"...\", \"reponseDetaillee\": \"...\"}\n"
                + "]";
            String response = appelGroq(prompt, 2500);
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
            String prompt = "السؤال: " + question + "\nالإجابة المتوقّعة: " + reponseAttendue
                + "\nإجابة الطالب: " + reponseEtudiant
                + "\nقيّم الإجابة: 1) قدّم تغذية راجعة تربوية مشجّعة ودقيقة في جملتين إلى ثلاث. 2) أعطِ درجة من 0 إلى 10. 3) حدّد ما إذا كانت الإجابة صحيحة. "
                + "أجب باللغة العربية وبصيغة JSON صالحة فقط (دون نص قبلها أو بعدها) بالهيكل التالي تماماً: {\"evaluation\": \"نص\", \"points\": 8, \"estCorrect\": true}.";
            String response = appelGroq(prompt, 1000);
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
    private String appelGroq(String prompt, int maxTokens) {
        try {
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
        } catch (Exception ex) {
            throw new RuntimeException("خطأ واجهة Groq: " + ex.getMessage());
        }
    }

    private String appelGroq(String prompt) {
        return appelGroq(prompt, 1500);
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

    private String getFallbackContenuLecon(String matiere, String titreLecon) {
        return "يتناول هذا الدرس التفاعلي بالتفصيل: " + titreLecon + ". ستتعلّم فيه الأسس الضرورية لتطوير معرفتك في " + matiere
            + " من خلال شرح مبسّط، أمثلة عملية، وربط المفاهيم بتطبيقات الحياة اليومية.";
    }

    private List<Map<String, Object>> getFallbackQuestions(String matiere, String titreLecon) {
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
}
