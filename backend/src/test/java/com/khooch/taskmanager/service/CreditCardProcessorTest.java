package com.khooch.taskmanager.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import com.khooch.taskmanager.service.CreditCardProcessor;

public class CreditCardProcessorTest {

    @Test
    public void testProcess() {
        CreditCardProcessor processor = new CreditCardProcessor();
        boolean result = processor.process();
        assertTrue(result, "CreditCardProcessor should return true when processing a payment.");
    }
}
