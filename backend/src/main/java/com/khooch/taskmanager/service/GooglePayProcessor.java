package com.khooch.taskmanager.service;

public class GooglePayProcessor implements PaymentProcessor {
    @Override
    public boolean process() {
        System.out.println("Processing payment through Google Pay...");
        return true; // Assume the payment is always successful for simplicity
    }
}
