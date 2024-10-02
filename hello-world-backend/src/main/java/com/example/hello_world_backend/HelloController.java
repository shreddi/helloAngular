package com.example.hello_world_backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloController {

    private Map<String, Double> exchangeRates;

    public HelloController() {
        exchangeRates = new HashMap<>();
        // Static exchange rates for demo purposes (replace with real API data)
        exchangeRates.put("USD-EUR", 0.94);
        exchangeRates.put("EUR-USD", 1.06);
        exchangeRates.put("USD-GBP", 0.76);
        exchangeRates.put("GBP-USD", 1.31);
        exchangeRates.put("USD-JPY", 144.31);
        exchangeRates.put("JPY-USD", 0.0069);
        // Add more rates as needed
    }

    @GetMapping("/api/convert")
    public double convertCurrency(
        @RequestParam double amount, 
        @RequestParam String from, 
        @RequestParam String to) {
        
        String key = from + "-" + to;
        double rate = exchangeRates.getOrDefault(key, 1.0);
        
        return amount * rate;
    }
}