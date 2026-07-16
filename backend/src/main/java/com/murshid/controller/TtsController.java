package com.murshid.controller;

import com.murshid.service.TtsService;
import jakarta.validation.constraints.NotBlank;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tts")
public class TtsController {

    private final TtsService ttsService;

    public TtsController(TtsService ttsService) {
        this.ttsService = ttsService;
    }

    @GetMapping("/arabic")
    public ResponseEntity<byte[]> lireArabe(@RequestParam("text") @NotBlank String text) {
        getCurrentUserId(); // ensure authenticated
        byte[] audio = ttsService.synthetiserArabe(text);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType("audio/mpeg"));
        headers.setCacheControl("max-age=3600");
        return new ResponseEntity<>(audio, headers, HttpStatus.OK);
    }

    private Long getCurrentUserId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.getName() != null) {
            try {
                return Long.parseLong(auth.getName());
            } catch (NumberFormatException e) {
                return 0L;
            }
        }
        return 0L;
    }
}
