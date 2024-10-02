package com.example.hello_world_backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloController {

    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/api/convert")
    public double convertCurrency(
            @RequestParam double amount,
            @RequestParam String from,
            @RequestParam String to) {

        // Fetch exchange rates from the API
        String url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/" + from.toLowerCase() + ".json";
        Map<String, Map<String, Double>> response = restTemplate.getForObject(url, Map.class);
                
        // Extract the exchange rate for the target currency
        Map<String, Double> rates = response.get(from.toLowerCase());
        double rate = rates.get(to.toLowerCase());
        
        // Return the converted amount
        return amount * rate;
    }
}