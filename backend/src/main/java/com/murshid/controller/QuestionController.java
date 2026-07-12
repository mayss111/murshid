package com.murshid.controller;

import com.murshid.dto.EvaluationResponseDto;
import com.murshid.dto.SoumettreReponseDto;
import com.murshid.entity.Lecon;
import com.murshid.entity.Question;
import com.murshid.exception.UnauthorizedException;
import com.murshid.service.QuestionService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/question")
public class QuestionController {

    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    private Long getCurrentUserId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.getName() != null) {
            try {
                return Long.parseLong(auth.getName());
            } catch (NumberFormatException e) {
                throw new UnauthorizedException("المستخدم غير مصادق عليه");
            }
        }
        throw new UnauthorizedException("المستخدم غير مصادق عليه");
    }

    @GetMapping("/lecon/{leconId}")
    public ResponseEntity<List<Question>> getQuestionsByLecon(@PathVariable Long leconId) {
        List<Question> questions = questionService.getQuestionsByLecon(leconId);
        return ResponseEntity.ok(questions);
    }

    @GetMapping("/lecon-details/{leconId}")
    public ResponseEntity<Lecon> getLeconWithQuestions(@PathVariable Long leconId) {
        Lecon lecon = questionService.getLeconById(leconId);
        return ResponseEntity.ok(lecon);
    }

    @PostMapping("/soumettre")
    public ResponseEntity<EvaluationResponseDto> soumettreReponse(@Valid @RequestBody SoumettreReponseDto dto) {
        Long userId = getCurrentUserId();
        EvaluationResponseDto result = questionService.soumettreReponse(userId, dto);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }
}
