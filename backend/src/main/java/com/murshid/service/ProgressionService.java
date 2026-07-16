package com.murshid.service;

import com.murshid.entity.Progression;
import com.murshid.repository.ProgressionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class ProgressionService {

    private final ProgressionRepository progressionRepository;

    public ProgressionService(ProgressionRepository progressionRepository) {
        this.progressionRepository = progressionRepository;
    }

    public List<Progression> getProgressionsByEleve(Long eleveId) {
        return progressionRepository.findByEleveId(eleveId);
    }

    public Integer getTotalPointsByEleve(Long eleveId) {
        return progressionRepository.findByEleveId(eleveId).stream()
                .mapToInt(Progression::getPointsObtenus)
                .sum();
    }

    /**
     * Nombre de questions réellement répondues (progressions terminées).
     */
    public Long getQuestionsAnswered(Long eleveId) {
        return progressionRepository.findByEleveId(eleveId).stream()
                .filter(p -> Boolean.TRUE.equals(p.getEstTerminee()))
                .count();
    }

    /**
     * Taux de réussite réel = points obtenus / points totaux sur les questions terminées (%).
     */
    public Integer getSuccessRate(Long eleveId) {
        List<Progression> terminees = progressionRepository.findByEleveId(eleveId).stream()
                .filter(p -> Boolean.TRUE.equals(p.getEstTerminee()))
                .collect(Collectors.toList());

        long totalPoints = terminees.stream()
                .mapToLong(p -> p.getPointsTotaux() == null ? 0 : p.getPointsTotaux())
                .sum();
        if (totalPoints == 0) {
            return 0;
        }
        long obtenus = terminees.stream()
                .mapToLong(p -> p.getPointsObtenus() == null ? 0 : p.getPointsObtenus())
                .sum();
        return (int) Math.round((obtenus * 100.0) / totalPoints);
    }

    /**
     * Série de jours consécutifs d'activité (jusqu'à aujourd'hui inclus).
     */
    public Integer getStudyDaysStreak(Long eleveId) {
        Set<LocalDate> activeDays = progressionRepository.findByEleveId(eleveId).stream()
                .map(this::resolveActivityDate)
                .filter(java.util.Objects::nonNull)
                .collect(Collectors.toSet());

        if (activeDays.isEmpty()) {
            return 0;
        }

        LocalDate today = LocalDate.now();
        // La série démarre à partir d'aujourd'hui ou de la veille (tolérance d'un jour).
        LocalDate cursor;
        if (activeDays.contains(today)) {
            cursor = today;
        } else if (activeDays.contains(today.minusDays(1))) {
            cursor = today.minusDays(1);
        } else {
            return 0;
        }

        int streak = 0;
        while (activeDays.contains(cursor)) {
            streak++;
            cursor = cursor.minusDays(1);
        }
        return streak;
    }

    private LocalDate resolveActivityDate(Progression p) {
        LocalDateTime dt = p.getDateTerminaison() != null ? p.getDateTerminaison() : p.getDateDemarrage();
        return dt == null ? null : dt.toLocalDate();
    }
}
