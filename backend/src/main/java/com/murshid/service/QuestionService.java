package com.murshid.service;

import com.murshid.dto.EvaluationResponseDto;
import com.murshid.dto.SoumettreReponseDto;
import com.murshid.entity.Lecon;
import com.murshid.entity.Progression;
import com.murshid.entity.Question;
import com.murshid.exception.ResourceNotFoundException;
import com.murshid.repository.LeconRepository;
import com.murshid.repository.ProgressionRepository;
import com.murshid.repository.QuestionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final LeconRepository leconRepository;
    private final ProgressionRepository progressionRepository;
    private final GroqService groqService;
    private final ParcoursService parcoursService;

    public QuestionService(QuestionRepository questionRepository,
                           LeconRepository leconRepository,
                           ProgressionRepository progressionRepository,
                           GroqService groqService,
                           ParcoursService parcoursService) {
        this.questionRepository = questionRepository;
        this.leconRepository = leconRepository;
        this.progressionRepository = progressionRepository;
        this.groqService = groqService;
        this.parcoursService = parcoursService;
    }

    public List<Question> getQuestionsByLecon(Long leconId) {
        return questionRepository.findByLeconId(leconId);
    }

    public Lecon getLeconById(Long leconId) {
        return leconRepository.findByIdWithQuestions(leconId)
                .orElseThrow(() -> new ResourceNotFoundException("لم يتم العثور على الدرس بالمعرّف: " + leconId));
    }

    public EvaluationResponseDto soumettreReponse(Long eleveId, SoumettreReponseDto request) {
        Question question = questionRepository.findById(request.getQuestionId())
                .orElseThrow(() -> new ResourceNotFoundException("لم يتم العثور على السؤال بالمعرّف: " + request.getQuestionId()));

        Map<String, Object> evaluationResult = groqService.evaluerReponse(
                question.getTexte(), 
                request.getReponse(), 
                question.getReponseAttendue()
        );

        String feedbackAi = (String) evaluationResult.getOrDefault("evaluation", "إجابة جيدة! واصل تقدّمك هكذا.");

        Object pointsObj = evaluationResult.get("points");
        int pointsAttribues = 7;
        if (pointsObj instanceof Number) {
            pointsAttribues = (int) Math.round(((Number) pointsObj).doubleValue());
        } else if (pointsObj instanceof String) {
            try {
                pointsAttribues = Integer.parseInt((String) pointsObj);
            } catch (NumberFormatException ignored) {
                // keep default 7
            }
        }
        pointsAttribues = Math.max(0, Math.min(10, pointsAttribues));

        Object estCorrectObj = evaluationResult.get("estCorrect");
        boolean estCorrect = true;
        if (estCorrectObj instanceof Boolean) {
            estCorrect = (Boolean) estCorrectObj;
        } else if (estCorrectObj instanceof String) {
            estCorrect = Boolean.parseBoolean((String) estCorrectObj);
        }

        Progression progression = progressionRepository.findByEleveIdAndQuestionId(eleveId, question.getId())
                .orElseGet(() -> Progression.builder()
                        .eleveId(eleveId)
                        .leconId(question.getLeconId())
                        .questionId(question.getId())
                        .dateDemarrage(LocalDateTime.now())
                        .nombreTentatives(0)
                        .build());

        progression.setReponseEtudiant(request.getReponse());
        progression.setPointsObtenus(pointsAttribues);
        progression.setPointsTotaux(10);
        progression.setEstTerminee(true);
        progression.setDateTerminaison(LocalDateTime.now());
        progression.setNombreTentatives(progression.getNombreTentatives() + 1);

        progression = progressionRepository.save(progression);
        Lecon lecon = leconRepository.findById(question.getLeconId())
                .orElseThrow(() -> new ResourceNotFoundException("لم يتم العثور على الدرس بالمعرّف: " + question.getLeconId()));
        parcoursService.calculerProgression(lecon.getParcoursId());

        return EvaluationResponseDto.builder()
                .progressionId(progression.getId())
                .evaluation(feedbackAi)
                .points(pointsAttribues)
                .estCorrect(estCorrect)
                .build();
    }
}
