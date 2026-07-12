package com.murshid.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false, length = 256)
    private String email;

    @JsonIgnore
    @Column(nullable = false)
    private String passwordHash;

    @Column(nullable = false, length = 100)
    private String firstName;

    @Column(nullable = false, length = 100)
    private String lastName;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserRole role = UserRole.ELEVE;

    @Column(length = 50)
    private String dialecte; // arabe, etc.

    @Column(nullable = false)
    private Integer niveauActuel = 1;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime dateInscription;

    @Column(nullable = false)
    private Boolean estActif = true;

    @JsonIgnore
    @OneToMany(mappedBy = "eleve", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Parcours> parcours = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "eleve", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Progression> progressions = new ArrayList<>();

    public enum UserRole {
        ELEVE, SHEIKH, ADMIN
    }

    public Long getId() { return id; }
    public String getEmail() { return email; }
    public String getPasswordHash() { return passwordHash; }
    public String getFirstName() { return firstName; }
    public String getLastName() { return lastName; }
    public UserRole getRole() { return role; }
    public String getDialecte() { return dialecte; }
    public Integer getNiveauActuel() { return niveauActuel; }
    public LocalDateTime getDateInscription() { return dateInscription; }
    public Boolean getEstActif() { return estActif; }
    public List<Parcours> getParcours() { return parcours; }
    public List<Progression> getProgressions() { return progressions; }
    
    public static Builder builder() { return new Builder(); }
    
    public static class Builder {
        private Long id;
        private String email, passwordHash, firstName, lastName, dialecte;
        private UserRole role = UserRole.ELEVE;
        private Integer niveauActuel = 1;
        private LocalDateTime dateInscription;
        private Boolean estActif = true;
        private List<Parcours> parcours = new ArrayList<>();
        private List<Progression> progressions = new ArrayList<>();
        
        public Builder id(Long id) { this.id = id; return this; }
        public Builder email(String email) { this.email = email; return this; }
        public Builder passwordHash(String passwordHash) { this.passwordHash = passwordHash; return this; }
        public Builder firstName(String firstName) { this.firstName = firstName; return this; }
        public Builder lastName(String lastName) { this.lastName = lastName; return this; }
        public Builder role(UserRole role) { this.role = role; return this; }
        public Builder dialecte(String dialecte) { this.dialecte = dialecte; return this; }
        public Builder niveauActuel(Integer niveauActuel) { this.niveauActuel = niveauActuel; return this; }
        public Builder dateInscription(LocalDateTime dateInscription) { this.dateInscription = dateInscription; return this; }
        public Builder estActif(Boolean estActif) { this.estActif = estActif; return this; }
        public Builder parcours(List<Parcours> parcours) { this.parcours = parcours; return this; }
        public Builder progressions(List<Progression> progressions) { this.progressions = progressions; return this; }
        
        public User build() {
            User user = new User();
            user.id = this.id;
            user.email = this.email;
            user.passwordHash = this.passwordHash;
            user.firstName = this.firstName;
            user.lastName = this.lastName;
            user.role = this.role;
            user.dialecte = this.dialecte;
            user.niveauActuel = this.niveauActuel;
            user.dateInscription = this.dateInscription;
            user.estActif = this.estActif;
            user.parcours = this.parcours;
            user.progressions = this.progressions;
            return user;
        }
    }
    
    public void setId(Long id) { this.id = id; }
    public void setEmail(String email) { this.email = email; }
    public void setPasswordHash(String passwordHash) { this.passwordHash = passwordHash; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public void setRole(UserRole role) { this.role = role; }
    public void setDialecte(String dialecte) { this.dialecte = dialecte; }
    public void setNiveauActuel(Integer niveauActuel) { this.niveauActuel = niveauActuel; }
    public void setDateInscription(LocalDateTime dateInscription) { this.dateInscription = dateInscription; }
    public void setEstActif(Boolean estActif) { this.estActif = estActif; }
    public void setParcours(List<Parcours> parcours) { this.parcours = parcours; }
    public void setProgressions(List<Progression> progressions) { this.progressions = progressions; }
}
