package com.khooch.taskmanager.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class UsernameLengthValidator implements ConstraintValidator<UsernameLength, String> {

    @Override
    public void initialize(UsernameLength constraintAnnotation) {
    }

    @Override
    public boolean isValid(String username, ConstraintValidatorContext context) {
        return username != null && username.length() > 6;
    }
}
