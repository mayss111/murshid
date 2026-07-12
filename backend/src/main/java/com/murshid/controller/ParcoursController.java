package com.murshid.controller;

import com.murshid.dto.GenererParcoursDto;
import com.murshid.entity.Parcours;
import com.murshid.exception.UnauthorizedException;
import com.murshid.service.ParcoursService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/parcours")
public class ParcoursController {

    private final ParcoursService parcoursService;

    public ParcoursController(ParcoursService parcoursService) {
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

    @PostMapping("/generer")
    public ResponseEntity<Parcours> genererParcours(@Valid @RequestBody GenererParcoursDto dto) {
        Long userId = getCurrentUserId();
        Parcours parcours = parcoursService.genererParcours(userId, dto.getMatiere());
        return ResponseEntity.ok(parcours);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Parcours> obtenirParcours(@PathVariable Long id) {
        Parcours parcours = parcoursService.obtenirParcours(id);
        return ResponseEntity.ok(parcours);
    }

    @GetMapping("/mes-parcours")
    public ResponseEntity<List<Parcours>> obtenirMesParcours() {
        Long userId = getCurrentUserId();
        List<Parcours> parcoursList = parcoursService.obtenirMesParcours(userId);
        return ResponseEntity.ok(parcoursList);
    }

    @GetMapping("/{id}/progression")
    public ResponseEntity<Map<String, Object>> obtenirProgression(@PathVariable Long id) {
        BigDecimal progression = parcoursService.calculerProgression(id);
        return ResponseEntity.ok(Map.of("progression", progression));
    }
}
