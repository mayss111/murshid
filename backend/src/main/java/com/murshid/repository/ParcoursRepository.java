package com.murshid.repository;

import com.murshid.entity.Parcours;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ParcoursRepository extends JpaRepository<Parcours, Long> {
    @Query("SELECT DISTINCT p FROM Parcours p LEFT JOIN FETCH p.lecons l LEFT JOIN FETCH l.questions WHERE p.eleveId = :eleveId ORDER BY p.dateCreation DESC")
    List<Parcours> findByEleveIdOrderByDateCreationDesc(@Param("eleveId") Long eleveId);

    @Query("SELECT DISTINCT p FROM Parcours p LEFT JOIN FETCH p.lecons l LEFT JOIN FETCH l.questions WHERE p.id = :id")
    Optional<Parcours> findByIdWithLeconsAndQuestions(@Param("id") Long id);

    long countByEleveIdAndStatus(Long eleveId, Parcours.ParcoursStatus status);
}
