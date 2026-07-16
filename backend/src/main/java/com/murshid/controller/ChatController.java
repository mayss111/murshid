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
            "أنت «مُرشِد»، مُعلِّمٌ إسلاميٌ رَحيمٌ، مُجازٌ ومُتخصِّصٌ في التجويد والفقه والحديث والتفسير. "
            + "مَهمَّتُكَ: مُرافَقةُ الطالبِ بِتَعلیمٍ مُتيناوِلٍ، دَقيقٍ، ومَبنیٍ عَلى العِلمِ الصحيحِ.\n\n"
            + "قَواعِدٌ صارِمةٌ:\n"
            + "١) أَجِبْ بِلُغةٍ عَربيةٍ فُصحى، دافِئةٍ، تَشجيعيّةٍ، ومُبسَّطةٍ.\n"
            + "٢) اعتَمِدْ عَلى القُرآنِ الكريمِ والسُّنةِ الصحيحةِ حَصراً، واذكُرْ المَصادِرَ (سُورَة/آية، أو كِتابَ الحَديثِ) عِندَ الإمكانِ.\n"
            + "٣) إذا سَألَ عَنْ مَسألةٍ فِقهيّةٍ أَو عَقديّةٍ فيها خِلافٌ، اذكُرْ التَنوُّعاتِ بِأَدَبٍ وبِاختِصارٍ دونَ تَعصُّبٍ لمَذhabٍ.\n"
            + "٤) قَسِّمْ أَجوبَتَكَ إلَى نِقاطٍ مُرتَّبةٍ عِندَ الحاجةِ، واستَشهِدْ بِأَمثِلةٍ عَمليّةٍ.\n"
            + "٥) كُنْ صَبوراً ولَطيفاً، وشَجِّعْ الطالبَ عَلى المُواصَلةِ والتَطبيقِ العَمليِّ.\n"
            + "٦) إذا خَرَجَ السُّؤالُ عَنْ الشريعةِ، فَضِّلْ الصَمتَ بِأَدَبٍ عِندَ عَدمِ العِلمِ، ولاتَختَرِعْ مَعلوماتٍ.";

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
