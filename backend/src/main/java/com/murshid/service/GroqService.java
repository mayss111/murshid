package com.murshid.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

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

    public String genererParcours(String matiere, int niveauActuel) {
        try {
            String prompt = "أنشئ خطة تعلّم منظّمة وملهمة لمادة " + matiere 
                + " من المستوى " + niveauActuel + " إلى المستوى " + (niveauActuel + 4) + ". "
                + "قدّم 3 دروس رئيسية مع أهدافها.";
            return appelGroq(prompt, 1500);
        } catch (Exception ex) {
            logger.error("Erreur Groq (Parcours): {}", ex.getMessage());
            return getFallbackParcoursPlan(matiere, niveauActuel);
        }
    }

    public String genererContenuLecon(String matiere, int niveau, String titreLecon) {
        try {
            String prompt = "أنت عالم ومعلّم إسلامي متميّز ومجيد للتعليم في مادة " + matiere + ". "
                + "اكتب محتوى درس كاملاً ومنظّماً وتربوياً للدرس: '" + titreLecon + "' بالمستوى " + niveau + ". "
                + "هيكل المحتوى كما يلي:\n"
                + "1. مقدمة واضحة وجذّابة\n"
                + "2. شرح المفاهيم الأساسية بتعريفات مبسّطة\n"
                + "3. أمثلة عملية وملموسة\n"
                + "4. آيات قرآنية و/أو أحاديث مناسبة (مع المصادر إن أمكن)\n"
                + "5. التطبيق في الحياة اليومية\n"
                + "6. خاتمة وتلخيص لأهم النقاط\n\n"
                + "يجب أن يكون الأسلوب دافئاً وتشجيعياً وسهلاً. استخدم لغة بسيطة ودقيقة. "
                + "أجب باللغة العربية الفصحى وبالمحتوى الدرسي فقط، دون مقدمة أو خاتمة إضافية.";
            return appelGroq(prompt, 3000);
        } catch (Exception ex) {
            logger.error("خطأ Groq (محتوى الدرس): {}", ex.getMessage());
            return "يتناول هذا الدرس التفاعلي بالتفصيل: " + titreLecon + ". ستتعلّم فيه الأسس الضرورية لتطوير معرفتك في " + matiere + ".";
        }
    }

    public List<Map<String, Object>> genererQuestionsLecon(String matiere, int niveau, String titreLecon, String contenuLecon, int nombreQuestions) {
        try {
            String prompt = "أنت عالم ومعلّم إسلامي متميّز ومجيد للتعليم في مادة " + matiere + ". "
                + "إليك محتوى الدرس:\n"
                + "--- بداية المحتوى ---\n" + contenuLecon + "\n--- نهاية المحتوى ---\n\n"
                + "بالنسبة لهذا الدرس: '" + titreLecon + "' بالمستوى " + niveau + "، أنشئ بالضبط " + nombreQuestions + " أسئلة متنوّعة: "
                + "سؤالان من نوع الفهم، سؤالان من نوع التطبيق، سؤال واحد من نوع التأمّل. "
                + "يجب أن تكون الأسئلة مبنية فقط على محتوى الدرس المقدّم. "
                + "أجب باللغة العربية الفصحى وبصيغة JSON صالحة فقط (دون أي نص قبلها أو بعدها، ودون ```json) بالهيكل التالي تماماً:\n"
                + "[\n"
                + "  {\"texte\": \"نص السؤال بالعربية الفصحى\", \"type\": \"COMPREHENSION\", \"reponseAttendue\": \"الإجابة المتوقّعة الكاملة\", \"reponseDetaillee\": \"شرح تربوي مفصّل\"},\n"
                + "  {\"texte\": \"سؤال آخر\", \"type\": \"APPLICATION\", \"reponseAttendue\": \"...\", \"reponseDetaillee\": \"...\"}\n"
                + "]";
            String response = appelGroq(prompt, 2000);
            String cleanedResponse = nettoyerReponsePourJson(response);

            try {
                com.fasterxml.jackson.databind.ObjectMapper mapper = new com.fasterxml.jackson.databind.ObjectMapper();
                com.fasterxml.jackson.databind.JsonNode root = mapper.readTree(cleanedResponse);
                if (root == null || root.isNull()) {
                    throw new RuntimeException("Réponse JSON vide");
                }
                if (root.isObject()) {
                    root = mapper.createArrayNode().add(root);
                }
                if (!root.isArray()) {
                    throw new RuntimeException("Réponse JSON ni objet ni tableau");
                }
                List<Map<String, Object>> questions = mapper.convertValue(root, List.class);
                for (Map<String, Object> q : questions) {
                    q.putIfAbsent("texte", "ما هي المفاهيم الأساسية للدرس؟");
                    q.putIfAbsent("type", "COMPREHENSION");
                    q.putIfAbsent("reponseAttendue", "إجابة قائمة على مبادئ الدرس.");
                    q.putIfAbsent("reponseDetaillee", "شرح مفصّل للمفاهيم الأساسية للدرس.");
                }
                return questions;
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

    private List<Map<String, Object>> getFallbackQuestions(String matiere, String titreLecon) {
        return List.of(
            Map.of("texte", "ما هي المفاهيم الأساسية لـ '" + titreLecon + "' ؟", 
                  "type", "COMPREHENSION", 
                  "reponseAttendue", "فهم أسس " + matiere, 
                  "reponseDetaillee", "شرح المبادئ الأساسية."),
            Map.of("texte", "كيف يمكن تطبيق هذه المفاهيم في الحياة اليومية؟", 
                  "type", "APPLICATION", 
                  "reponseAttendue", "تطبيق عملي للتعاليم", 
                  "reponseDetaillee", "أمثلة للتطبيق في الحياة اليومية.")
        );
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
                Map<String, Object> evaluation = new com.fasterxml.jackson.databind.ObjectMapper().readValue(cleanedResponse, Map.class);
                
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
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            if (groqApiKey != null && !groqApiKey.isBlank()) {
                headers.setBearerAuth(groqApiKey);
            }

            Map<String, Object> requestBody = new HashMap<>();
            requestBody.put("model", model);
            requestBody.put("temperature", 0.7);
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
            return "الرد غير متاح حالياً.";
        } catch (Exception ex) {
            throw new RuntimeException("خطأ واجهة Groq: " + ex.getMessage());
        }
    }

    private String appelGroq(String prompt) {
        return appelGroq(prompt, 1500);
    }

    private String getFallbackParcoursPlan(String matiere, int niveau) {
        return "خطة دراسية منظّمة في " + matiere + " (المستوى " + niveau + ") : 1. الأسس والمبادئ، 2. التطبيق العملي والقواعد، 3. الإتقان المتقدّم والمراجعة.";
    }
}
