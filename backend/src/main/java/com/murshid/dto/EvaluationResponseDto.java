package com.murshid.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EvaluationResponseDto {
    private Long progressionId;
    private String evaluation;
    private Integer points;
    private Boolean estCorrect;
}
