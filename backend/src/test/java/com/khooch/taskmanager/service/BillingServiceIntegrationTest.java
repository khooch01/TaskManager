package com.khooch.taskmanager.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.khooch.taskmanager.service.BillingService;
import com.khooch.taskmanager.service.PaymentProcessor;
import com.khooch.taskmanager.service.PaymentProcessorFactory;

@SpringBootTest
public class BillingServiceIntegrationTest {

    @Autowired
    private BillingService billingService;

    @Test
    public void testCompletePaymentWithGooglePayProcessor() {
        assertTrue(billingService.completePayment(), "Payment should be completed successfully with GooglePayProcessor.");
    }

    @Configuration
    static class TestConfig {

        @Bean
        public PaymentProcessorFactory paymentProcessorFactory() {
            return new PaymentProcessorFactory();
        }

        @Bean
        public PaymentProcessor paymentProcessor(PaymentProcessorFactory factory) {
            return factory.getPaymentProcessor("gpay");
        }

        @Bean
        public BillingService billingService(PaymentProcessor paymentProcessor) {
            return new BillingService(paymentProcessor);
        }
    }
}
