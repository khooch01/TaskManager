package com.khooch.taskmanager.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class PasswordValidator implements ConstraintValidator<ValidPassword, String> {

    @Override
    public boolean isValid(String password, ConstraintValidatorContext context) {
        // Implement your password validation logic here
        // Example: Password must contain at least one special character
        return password != null && password.matches(".*[@!].*");
    }
}
