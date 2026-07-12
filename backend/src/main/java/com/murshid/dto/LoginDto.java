package com.murshid.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
public class LoginDto {
    @NotBlank(message = "البريد الإلكتروني إلزامي")
    @Email(message = "صيغة البريد الإلكتروني غير صالحة")
    private String email;

    @NotBlank(message = "كلمة المرور إلزامية")
    private String password;

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
