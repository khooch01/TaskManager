package com.khooch.taskmanager.dto;

import com.khooch.taskmanager.validation.ValidPassword;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class UserRegistrationDto {

    @NotBlank(message = "Username is required")
    @Size(min = 6, message = "Username must be at least 6 characters long")
    private String username;

    @NotBlank(message = "Password is required")
    @Size(min = 10, max = 20, message = "Password must be between 10 and 20 characters long")
    @ValidPassword
    private String password;

    // Getters and setters

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
