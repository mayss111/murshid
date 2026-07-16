package com.murshid.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.List;

@Data
public class ChatRequestDto {
    @NotBlank(message = "نص الرسالة إلزامي")
    private String message;

    private List<ChatHistoryDto> history;
}
