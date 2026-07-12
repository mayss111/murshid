package com.murshid.service;

import com.murshid.entity.Progression;
import com.murshid.repository.ProgressionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

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
}
