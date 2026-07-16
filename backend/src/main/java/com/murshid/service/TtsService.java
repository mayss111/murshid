package com.murshid.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

@Service
public class TtsService {

    private static final Logger logger = LoggerFactory.getLogger(TtsService.class);

    @Value("${voicerss.api.key:}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    /**
     * Synthesize Arabic speech for the given text and return it as an MP3 audio byte array.
     * Uses VoiceRSS cloud TTS so every user hears the same Arabic voice, independent of the
     * device's installed voices.
     */
    public byte[] synthetiserArabe(String texte) {
        if (texte == null || texte.isBlank()) {
            throw new IllegalArgumentException("النص فارغ");
        }
        if (apiKey == null || apiKey.isBlank()) {
            logger.error("Clé VoiceRSS non configurée (VOICERSS_API_KEY)");
            throw new IllegalStateException("service TTS non configuré");
        }

        try {
            String src = URLEncoder.encode(texte, StandardCharsets.UTF_8);
            String url = "https://api.voicerss.org/?key=" + apiKey
                    + "&hl=ar-sa&src=" + src
                    + "&c=MP3&f=44khz_16bit_stereo&r=0&v=Hala";

            ResponseEntity<byte[]> response = restTemplate.getForEntity(url, byte[].class);

            if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
                return response.getBody();
            }
            logger.error("Réponse VoiceRSS inattendue: {}", response.getStatusCode());
            throw new IllegalStateException("échec de la synthèse vocale");
        } catch (Exception ex) {
            logger.error("Erreur TTS VoiceRSS: {}", ex.getMessage());
            throw new IllegalStateException("échec de la synthèse vocale: " + ex.getMessage());
        }
    }
}
