package com.khooch.taskmanager.service;

public class CreditCardProcessor implements PaymentProcessor {
    @Override
    public boolean process() {
        System.out.println("Processing payment through Credit Card...");
        return true; // Assume the payment is always successful for simplicity
    }
}
