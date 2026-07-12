package com.murshid.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "questions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long leconId;

    @Column(nullable = false, length = 1000)
    private String texte;

    @Column(nullable = false, length = 2000)
    private String reponseAttendue;

    @Column(columnDefinition = "TEXT")
    @Builder.Default
    private String reponseDetaillee = "";

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private QuestionType type = QuestionType.COMPREHENSION;

    @Column(nullable = false)
    private Integer niveau;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime dateCreation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "leconId", insertable = false, updatable = false)
    @com.fasterxml.jackson.annotation.JsonIgnore
    private Lecon lecon;

    public enum QuestionType {
        QCM, COMPREHENSION, REFLEXION, APPLICATION
    }
}
