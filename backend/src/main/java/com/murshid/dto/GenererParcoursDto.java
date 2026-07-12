package com.murshid.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class GenererParcoursDto {
    @NotBlank(message = "المادة إلزامية")
    private String matiere; // Tajweed, Fiqh, Hadith, Tafsir
}
