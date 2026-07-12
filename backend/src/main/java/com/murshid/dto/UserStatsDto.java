package com.murshid.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserStatsDto {
    private Integer totalPoints;
    private Long completedParcours;
    private Long activeParcours;
}
