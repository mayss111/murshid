package com.murshid.controller;

import com.murshid.dto.UserStatsDto;
import com.murshid.entity.User;
import com.murshid.exception.UnauthorizedException;
import com.murshid.service.UserService;
import com.murshid.service.ProgressionService;
import com.murshid.service.ParcoursService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final ProgressionService progressionService;
    private final ParcoursService parcoursService;

    public UserController(UserService userService,
                          ProgressionService progressionService,
                          ParcoursService parcoursService) {
        this.userService = userService;
        this.progressionService = progressionService;
        this.parcoursService = parcoursService;
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

    @GetMapping("/me")
    public ResponseEntity<User> getMyProfile() {
        Long userId = getCurrentUserId();
        User user = userService.getById(userId);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/me/stats")
    public ResponseEntity<UserStatsDto> getMyStats() {
        Long userId = getCurrentUserId();
        UserStatsDto stats = UserStatsDto.builder()
                .totalPoints(progressionService.getTotalPointsByEleve(userId))
                .completedParcours(parcoursService.compterParcoursTermines(userId))
                .activeParcours(parcoursService.compterParcoursActifs(userId))
                .questionsAnswered(progressionService.getQuestionsAnswered(userId))
                .successRate(progressionService.getSuccessRate(userId))
                .studyDaysStreak(progressionService.getStudyDaysStreak(userId))
                .build();
        return ResponseEntity.ok(stats);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updateDetails) {
        User updated = userService.updateUser(id, updateDetails);
        return ResponseEntity.ok(updated);
    }
}
