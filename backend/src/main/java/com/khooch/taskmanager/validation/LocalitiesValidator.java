package com.khooch.taskmanager.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class LocalitiesValidator implements ConstraintValidator<ValidLocalities, String> {

    @Override
    public boolean isValid(String localities, ConstraintValidatorContext context) {
        if (localities == null || localities.isEmpty()) {
            return false;
        }
        return localities.length() <= 255;
    }
}
