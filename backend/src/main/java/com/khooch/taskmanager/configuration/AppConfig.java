package com.khooch.taskmanager.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.khooch.taskmanager.service.BillingService;
import com.khooch.taskmanager.service.PaymentProcessor;
import com.khooch.taskmanager.service.PaymentProcessorFactory;

@Configuration
public class AppConfig {

    @Bean
    public PaymentProcessorFactory paymentProcessorFactory() {
        return new PaymentProcessorFactory();
    }

    @Bean
    public PaymentProcessor paymentProcessor(PaymentProcessorFactory factory) {
        return factory.getPaymentProcessor("gpay"); // or "credit_card"
    }

    @Bean
    public BillingService billingService(PaymentProcessor paymentProcessor) {
        return new BillingService(paymentProcessor);
    }
}
