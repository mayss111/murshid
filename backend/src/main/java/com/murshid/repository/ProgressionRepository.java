package com.murshid.repository;

import com.murshid.entity.Progression;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProgressionRepository extends JpaRepository<Progression, Long> {
    List<Progression> findByEleveId(Long eleveId);
    Optional<Progression> findByEleveIdAndQuestionId(Long eleveId, Long questionId);
    List<Progression> findByEleveIdAndLeconId(Long eleveId, Long leconId);
}
