package com.murshid.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class SoumettreReponseDto {
    @NotNull(message = "معرّف السؤال إلزامي")
    private Long questionId;

    private String reponse;
}
