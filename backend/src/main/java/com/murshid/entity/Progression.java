package com.murshid.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "progressions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Progression {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long eleveId;

    @Column(nullable = false)
    private Long leconId;

    @Column(nullable = false)
    private Long questionId;

    @Column(columnDefinition = "TEXT")
    @Builder.Default
    private String reponseEtudiant = "";

    @Column(nullable = false)
    @Builder.Default
    private Integer pointsObtenus = 0;

    @Column(nullable = false)
    @Builder.Default
    private Integer pointsTotaux = 10;

    @Column(nullable = false)
    @Builder.Default
    private Boolean estTerminee = false;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime dateDemarrage;

    @Column
    private LocalDateTime dateTerminaison;

    @Column(nullable = false)
    @Builder.Default
    private Integer nombreTentatives = 0;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "eleveId", insertable = false, updatable = false)
    @com.fasterxml.jackson.annotation.JsonIgnore
    private User eleve;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "leconId", insertable = false, updatable = false)
    @com.fasterxml.jackson.annotation.JsonIgnore
    private Lecon lecon;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "questionId", insertable = false, updatable = false)
    @com.fasterxml.jackson.annotation.JsonIgnore
    private Question question;
}
