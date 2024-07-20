package com.khooch.taskmanager.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class PhoneNumberValidator implements ConstraintValidator<ValidPhoneNumber, String> {

    @Override
    public boolean isValid(String phoneNumber, ConstraintValidatorContext context) {
        if (phoneNumber == null || phoneNumber.isEmpty()) {
            return false;
        }
        // Validate Malaysian phone number format (011, 012, 013, 014, 015, 016, 017, 018, 019 followed by 8 digits)
        return phoneNumber.matches("^(011|012|013|014|015|016|017|018|019)\\d{7,8}$");
    }
}
