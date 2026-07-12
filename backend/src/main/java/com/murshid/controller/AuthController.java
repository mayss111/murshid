package com.murshid.controller;

import com.murshid.dto.AuthResponseDto;
import com.murshid.dto.LoginDto;
import com.murshid.dto.RegisterDto;
import com.murshid.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponseDto> register(@Valid @RequestBody RegisterDto registerDto) {
        AuthResponseDto response = authService.register(registerDto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDto> login(@Valid @RequestBody LoginDto loginDto) {
        AuthResponseDto response = authService.login(loginDto);
        return ResponseEntity.ok(response);
    }
}
