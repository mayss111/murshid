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

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();

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

    /**
     * Génère tout le parcours (leçons + contenu + questions) en UN SEUL appel Groq.
     * Renvoie une liste de leçons, chacune avec son contenu et ses questions.
     * Renvoie null si l'IA échoue (le appelant utilise alors le fallback).
     */
    public List<Map<String, Object>> genererParcoursComplet(String matiere, int niveau) {
        try {
            String prompt = "أنت «مُرشِد»، معلّم إسلامي متميّز. صمّم مسار تعلّم كاملاً لمادة '" + matiere
                    + "' للمستوى " + niveau + ". "
                    + "أنشئ 3 دروس متسلسلة ومتنوّعة. لكل درس: عنوان دقيق، محتوى درسي مفصّل ومُلهم "
                    + "(بين 250 و450 كلمة، بالأسلوب التربوي: مقدمة، شرح المفاهيم، أمثلة، آيات/أحاديث، تطبيق، خاتمة)، "
                    + "ثم 4 أسئلة متنوّعة (COMPREHENSION، APPLICATION، REFLEXION، QCM) مبنية على المحتوى. "
                    + "أجب باللغة العربية الفصحى وبصيغة JSON صالحة فقط (دون أي نص قبلها أو بعدها، ودون ```json) بالهيكل التالي تماماً:\n"
                    + "[\n"
                    + "  {\n"
                    + "    \"titre\": \"عنوان الدرس الأول\",\n"
                    + "    \"contenu\": \"محتوى الدرس الأول المفصّل...\",\n"
                    + "    \"questions\": [\n"
                    + "      {\"texte\": \"السؤال الأول\", \"type\": \"COMPREHENSION\", \"reponseAttendue\": \"الإجابة\", \"reponseDetaillee\": \"الشرح\"},\n"
                    + "      {\"texte\": \"السؤال الثاني\", \"type\": \"APPLICATION\", \"reponseAttendue\": \"...\", \"reponseDetaillee\": \"...\"},\n"
                    + "      {\"texte\": \"السؤال الثالث\", \"type\": \"REFLEXION\", \"reponseAttendue\": \"...\", \"reponseDetaillee\": \"...\"},\n"
                    + "      {\"texte\": \"السؤال الرابع (اختر الإجابة الصحيحة من بين 3 خيارات)\", \"type\": \"QCM\", \"reponseAttendue\": \"...\", \"reponseDetaillee\": \"...\"}\n"
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
                        String titre = node.path("titre").asText("").trim();
                        if (titre.isEmpty()) {
                            continue;
                        }
                        Map<String, Object> lecon = new HashMap<>();
                        lecon.put("titre", titre);
                        lecon.put("contenu", node.path("contenu").asText("").trim());

                        List<Map<String, Object>> questions = new ArrayList<>();
                        JsonNode qNodes = node.path("questions");
                        if (qNodes.isArray()) {
                            for (JsonNode q : qNodes) {
                                String texte = q.path("texte").asText("").trim();
                                if (texte.isEmpty()) {
                                    continue;
                                }
                                Map<String, Object> qMap = new HashMap<>();
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

    // ====================== ÉVALUATION RÉPONSE ÉTUDIANT ======================

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

    // ====================== APPEL GROQ (1 APPEL) ======================

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
}
