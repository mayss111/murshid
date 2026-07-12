package com.murshid.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "lecons")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Lecon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long parcoursId;

    @Column(nullable = false, length = 256)
    private String titre;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String contenu;

    @Column(nullable = false)
    private Integer niveau;

    @Column(nullable = false, length = 100)
    private String matiere;

    @Column(nullable = false)
    private Integer ordreSequence;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime dateCreation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parcoursId", insertable = false, updatable = false)
    @com.fasterxml.jackson.annotation.JsonIgnore
    private Parcours parcours;

    @OneToMany(mappedBy = "lecon", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties({"lecon", "hibernateLazyInitializer", "handler"})
    @Builder.Default
    private Set<Question> questions = new HashSet<>();

    @OneToMany(mappedBy = "lecon", cascade = CascadeType.ALL, orphanRemoval = true)
    @com.fasterxml.jackson.annotation.JsonIgnore
    @Builder.Default
    private Set<Progression> progressions = new HashSet<>();
}
