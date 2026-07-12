package com.murshid.service;

import com.murshid.dto.AuthResponseDto;
import com.murshid.dto.LoginDto;
import com.murshid.dto.RegisterDto;
import com.murshid.entity.User;
import com.murshid.exception.UnauthorizedException;
import com.murshid.repository.UserRepository;
import com.murshid.security.JwtTokenProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@Transactional
public class AuthService {

    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);

    private final UserRepository userRepository;
    private final JwtTokenProvider tokenProvider;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository,
                       JwtTokenProvider tokenProvider,
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.tokenProvider = tokenProvider;
        this.passwordEncoder = passwordEncoder;
    }

    public AuthResponseDto register(RegisterDto request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("هذا البريد الإلكتروني مستخدم بالفعل");
        }

        User user = User.builder()
                .email(request.getEmail())
                .passwordHash(passwordEncoder.encode(request.getPassword()))
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .dialecte(request.getDialecte() != null ? request.getDialecte() : "arabe")
                .role(User.UserRole.ELEVE)
                .niveauActuel(1)
                .dateInscription(LocalDateTime.now())
                .estActif(true)
                .build();

        userRepository.save(user);
        logger.info("تم تسجيل مستخدم جديد بنجاح: {}", request.getEmail());

        String token = tokenProvider.generateToken(user);

        return AuthResponseDto.builder()
                .token(token)
                .message("تم التسجيل بنجاح")
                .expiresIn(3600)
                .userId(user.getId())
                .email(user.getEmail())
                .role(user.getRole().name())
                .build();
    }

    public AuthResponseDto login(LoginDto request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UnauthorizedException("البريد الإلكتروني أو كلمة المرور غير صحيحة"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPasswordHash())) {
            throw new UnauthorizedException("البريد الإلكتروني أو كلمة المرور غير صحيحة");
        }

        String token = tokenProvider.generateToken(user);
        logger.info("تم تسجيل الدخول بنجاح: {}", request.getEmail());

        return AuthResponseDto.builder()
                .token(token)
                .message("تم تسجيل الدخول بنجاح")
                .expiresIn(3600)
                .userId(user.getId())
                .email(user.getEmail())
                .role(user.getRole().name())
                .build();
    }
}
