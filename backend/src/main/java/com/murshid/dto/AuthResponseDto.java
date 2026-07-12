package com.murshid.dto;

public class AuthResponseDto {
    private String token;
    private String message;
    private long expiresIn;
    private Long userId;
    private String email;
    private String role;

    public AuthResponseDto() {}
    public AuthResponseDto(String token, String message, long expiresIn, Long userId, String email, String role) {
        this.token = token; this.message = message; this.expiresIn = expiresIn;
        this.userId = userId; this.email = email; this.role = role;
    }
    
    public static Builder builder() { return new Builder(); }
    
    public static class Builder {
        private String token, message, email, role;
        private long expiresIn;
        private Long userId;
        public Builder token(String token) { this.token = token; return this; }
        public Builder message(String message) { this.message = message; return this; }
        public Builder expiresIn(long expiresIn) { this.expiresIn = expiresIn; return this; }
        public Builder userId(Long userId) { this.userId = userId; return this; }
        public Builder email(String email) { this.email = email; return this; }
        public Builder role(String role) { this.role = role; return this; }
        public AuthResponseDto build() {
            return new AuthResponseDto(token, message, expiresIn, userId, email, role);
        }
    }
    
    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    public long getExpiresIn() { return expiresIn; }
    public void setExpiresIn(long expiresIn) { this.expiresIn = expiresIn; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
}
