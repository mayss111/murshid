package com.murshid.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
public class RegisterDto {
    @NotBlank(message = "البريد الإلكتروني إلزامي")
    @Email(message = "صيغة البريد الإلكتروني غير صالحة")
    private String email;

    @NotBlank(message = "كلمة المرور إلزامية")
    @Size(min = 6, message = "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل")
    private String password;

    @NotBlank(message = "الاسم الأول إلزامي")
    private String firstName;

    @NotBlank(message = "اسم العائلة إلزامي")
    private String lastName;

    private String dialecte;

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getDialecte() { return dialecte; }
    public void setDialecte(String dialecte) { this.dialecte = dialecte; }
}
