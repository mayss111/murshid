package com.murshid.controller;

import com.murshid.dto.ChatRequestDto;
import com.murshid.dto.ChatResponseDto;
import com.murshid.service.GroqService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    private final GroqService groqService;

    public ChatController(GroqService groqService) {
        this.groqService = groqService;
    }

    private static final String SYSTEM_PROMPT =
            "أنت «مُرشِد»، معلّم إسلامي رحيم، مُجازٍ ومُتخصّص في التجويد، الفقه، الحديث، والتفسير. "
            + "أجب بلغة عربية فصيحة، دافئة وتشجيعية، مُبسّطة ومنظّمة. "
            + "اعتمد على القرآن الكريم والسنّة الصحيحة، واذكر المصادر عند الإمكان. "
            + "كن لطيفاً وصبوراً مع المتعلّمين، وشجّعهم على المواصلة.";

    @PostMapping("/message")
    public ResponseEntity<ChatResponseDto> envoyerMessage(@Valid @RequestBody ChatRequestDto request) {
        List<Map<String, String>> messages = new ArrayList<>();
        Map<String, String> system = new LinkedHashMap<>();
        system.put("role", "system");
        system.put("content", SYSTEM_PROMPT);
        messages.add(system);

        if (request.getHistory() != null) {
            for (com.murshid.dto.ChatHistoryDto h : request.getHistory()) {
                if (h.getRole() != null && h.getContent() != null && !h.getContent().isBlank()) {
                    Map<String, String> m = new LinkedHashMap<>();
                    m.put("role", h.getRole());
                    m.put("content", h.getContent());
                    messages.add(m);
                }
            }
        }

        Map<String, String> userMsg = new LinkedHashMap<>();
        userMsg.put("role", "user");
        userMsg.put("content", request.getMessage());
        messages.add(userMsg);

        String reply = groqService.discuter(messages);

        return ResponseEntity.ok(ChatResponseDto.builder()
                .reply(reply)
                .role("assistant")
                .build());
    }
}
