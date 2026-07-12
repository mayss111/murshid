package com.murshid.service;

import com.murshid.entity.Lecon;
import com.murshid.entity.Parcours;
import com.murshid.entity.Question;
import com.murshid.entity.User;
import com.murshid.exception.ResourceNotFoundException;
import com.murshid.repository.LeconRepository;
import com.murshid.repository.ParcoursRepository;
import com.murshid.repository.QuestionRepository;
import com.murshid.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Service
@Transactional
public class ParcoursService {

    private static final Logger logger = LoggerFactory.getLogger(ParcoursService.class);

    private final ParcoursRepository parcoursRepository;
    private final UserRepository userRepository;
    private final LeconRepository leconRepository;
    private final QuestionRepository questionRepository;
    private final GroqService groqService;

    public ParcoursService(ParcoursRepository parcoursRepository,
                           UserRepository userRepository,
                           LeconRepository leconRepository,
                           QuestionRepository questionRepository,
                           GroqService groqService) {
        this.parcoursRepository = parcoursRepository;
        this.userRepository = userRepository;
        this.leconRepository = leconRepository;
        this.questionRepository = questionRepository;
        this.groqService = groqService;
    }

    public Parcours genererParcours(Long eleveId, String matiere) {
        User eleve = userRepository.findById(eleveId)
                .orElseThrow(() -> new ResourceNotFoundException("لم يتم العثور على المستخدم بالمعرّف: " + eleveId));

        String planJsonOrText = groqService.genererParcours(matiere, eleve.getNiveauActuel());

        Parcours parcours = Parcours.builder()
                .eleveId(eleveId)
                .titre("مسار " + matiere + " - المستوى " + eleve.getNiveauActuel())
                .description("مسار تعلّم مخصّص مولّد بالذكاء الاصطناعي في " + matiere + ". " + planJsonOrText)
                .matiere(matiere)
                .niveauActuel(eleve.getNiveauActuel())
                .niveauCible(eleve.getNiveauActuel() + 4)
                .progressionPourcent(BigDecimal.ZERO)
                .status(Parcours.ParcoursStatus.EN_COURS)
                .dateCreation(LocalDateTime.now())
                .lecons(new java.util.HashSet<>())
                .build();

        parcours = parcoursRepository.save(parcours);

        // Populate curriculum lessons & questions
        createCurriculumStructure(parcours, matiere, eleve.getNiveauActuel());

        logger.info("تم إنشاء المسار بنجاح بالمعرّف {} للطالب {}", parcours.getId(), eleveId);
        return parcoursRepository.findByIdWithLeconsAndQuestions(parcours.getId()).orElse(parcours);
    }

    private void createCurriculumStructure(Parcours parcours, String matiere, Integer niveau) {
        String[] lessonTitles = switch (matiere.toLowerCase()) {
            case "tajweed" -> new String[]{
                "مقدمة في قواعد المخارج (مخارج الحروف)",
                "أحكام النون الساكنة والتنوين (الإظهار، الإدغام، الإقلاب، الإخفاء)",
                "أحكام المد والوقف"
            };
            case "fiqh" -> new String[]{
                "مقدمة في الطهارة والوضوء",
                "أركان الصلاة وشروطها",
                "أحكام الصيام والزكاة"
            };
            case "hadith" -> new String[]{
                "مقدمة في الأربعين النووية (النية والإخلاص)",
                "منهجية تصنيف الحديث (صحيح، حسن، ضعيف)",
                "دراسة تطبيقية لأحاديث الأخلاق والسلوك"
            };
            case "tafsir" -> new String[]{
                "مقدمة في علم التفسير وأسباب النزول",
                "تفسير وتدبّر سورة الفاتحة",
                "تفسير السورتين المتوحّيتين (المعوذتين) والإخلاص"
            };
            default -> new String[]{
                "مقدمة في المبادئ الأساسية",
                "التعمّق العملي في القواعد",
                "حصيلة شاملة وتلخيص"
            };
        };

        for (int i = 0; i < lessonTitles.length; i++) {
            // Generate lesson content with Groq
            String contenuLecon = groqService.genererContenuLecon(matiere, niveau, lessonTitles[i]);
            
            Lecon lecon = Lecon.builder()
                    .parcoursId(parcours.getId())
                    .titre(lessonTitles[i])
                    .contenu(contenuLecon)
                    .niveau(niveau)
                    .matiere(matiere)
                    .ordreSequence(i + 1)
                    .dateCreation(LocalDateTime.now())
                    .build();

            lecon = leconRepository.save(lecon);

            // Generate questions with Groq (5 questions per lesson) using the actual lesson content
            List<Map<String, Object>> questionsData = groqService.genererQuestionsLecon(matiere, niveau, lessonTitles[i], contenuLecon, 5);
            Set<Question> questions = new HashSet<>();
            for (Map<String, Object> qData : questionsData) {
                Question.QuestionType type;
                try {
                    String typeStr = (String) qData.getOrDefault("type", "COMPREHENSION");
                    type = Question.QuestionType.valueOf(typeStr.toUpperCase());
                } catch (IllegalArgumentException e) {
                    type = Question.QuestionType.COMPREHENSION;
                }
                
                // Valider les champs de la question
                String texte = (String) qData.getOrDefault("texte", "ما هي المفاهيم الأساسية لهذا الدرس؟");
                if (texte == null || texte.isBlank()) {
                    texte = "ما هي المفاهيم الأساسية لهذا الدرس؟";
                }

                String reponseAttendue = (String) qData.getOrDefault("reponseAttendue", "إجابة قائمة على مبادئ الدرس.");
                if (reponseAttendue == null || reponseAttendue.isBlank()) {
                    reponseAttendue = "إجابة قائمة على مبادئ الدرس.";
                }

                String reponseDetaillee = (String) qData.getOrDefault("reponseDetaillee", "شرح للمفاهيم الأساسية للدرس.");
                if (reponseDetaillee == null || reponseDetaillee.isBlank()) {
                    reponseDetaillee = "شرح للمفاهيم الأساسية للدرس.";
                }
                
                Question q = Question.builder()
                    .leconId(lecon.getId())
                    .texte(texte)
                    .reponseAttendue(reponseAttendue)
                    .reponseDetaillee(reponseDetaillee)
                    .type(type)
                    .niveau(niveau)
                    .dateCreation(LocalDateTime.now())
                    .build();
                
                questions.add(q);
            }

            questionRepository.saveAll(questions);
        }
    }

    public Parcours obtenirParcours(Long id) {
        return parcoursRepository.findByIdWithLeconsAndQuestions(id)
                .orElseThrow(() -> new ResourceNotFoundException("لم يتم العثور على المسار بالمعرّف: " + id));
    }

    public List<Parcours> obtenirMesParcours(Long eleveId) {
        List<Parcours> list = parcoursRepository.findByEleveIdOrderByDateCreationDesc(eleveId);
        if (list.isEmpty()) {
            // Seed a default parcours for dynamic demo experience
            genererParcours(eleveId, "Tajweed");
            list = parcoursRepository.findByEleveIdOrderByDateCreationDesc(eleveId);
        }
        return list;
    }

    public Long compterParcoursTermines(Long eleveId) {
        return parcoursRepository.countByEleveIdAndStatus(eleveId, Parcours.ParcoursStatus.TERMINE);
    }

    public Long compterParcoursActifs(Long eleveId) {
        return parcoursRepository.countByEleveIdAndStatus(eleveId, Parcours.ParcoursStatus.EN_COURS);
    }

    public BigDecimal calculerProgression(Long parcoursId) {
        Parcours parcours = obtenirParcours(parcoursId);
        if (parcours.getLecons().isEmpty()) {
            return BigDecimal.ZERO;
        }

        Long eleveId = parcours.getEleveId();

        long leconsTerminees = parcours.getLecons().stream()
                .filter(lecon -> {
                    int totalQuestions = lecon.getQuestions().size();
                    if (totalQuestions == 0) {
                        return false;
                    }
                    long completedQuestions = lecon.getProgressions().stream()
                            .filter(p -> p.getEleveId().equals(eleveId) && Boolean.TRUE.equals(p.getEstTerminee()))
                            .map(p -> p.getQuestionId())
                            .distinct()
                            .count();
                    return completedQuestions >= totalQuestions;
                })
                .count();

        BigDecimal progression = BigDecimal.valueOf(leconsTerminees)
                .divide(BigDecimal.valueOf(parcours.getLecons().size()), 2, RoundingMode.HALF_UP)
                .multiply(BigDecimal.valueOf(100));

        parcours.setProgressionPourcent(progression);
        if (progression.compareTo(BigDecimal.valueOf(100)) >= 0) {
            parcours.setStatus(Parcours.ParcoursStatus.TERMINE);
            parcours.setDateTerminaison(LocalDateTime.now());
        }
        parcoursRepository.save(parcours);
        return progression;
    }
}
