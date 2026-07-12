package com.murshid.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "parcours")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Parcours {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long eleveId;

    @Column(nullable = false, length = 256)
    private String titre;

    @Column(columnDefinition = "TEXT")
    private String description = "";

    @Column(nullable = false, length = 100)
    private String matiere; // Tajweed, Fiqh, Hadith, Tafsir

    @Column(nullable = false)
    private Integer niveauActuel = 1;

    @Column(nullable = false)
    private Integer niveauCible = 10;

    @Column(nullable = false)
    private BigDecimal progressionPourcent = BigDecimal.ZERO;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ParcoursStatus status = ParcoursStatus.EN_COURS;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime dateCreation;

    @Column
    private LocalDateTime dateTerminaison;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "eleveId", insertable = false, updatable = false)
    @com.fasterxml.jackson.annotation.JsonIgnore
    private User eleve;

    @OneToMany(mappedBy = "parcours", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties({"parcours", "hibernateLazyInitializer", "handler"})
    @Builder.Default
    private Set<Lecon> lecons = new HashSet<>();

    public enum ParcoursStatus {
        EN_COURS, TERMINE, SUSPENDU, ABANDONNE
    }
}
