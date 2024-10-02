package com.example.hello_world_backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import java.util.Map;

@RestController //Tells spring boot that this class handles HTTP requests and returns a JSON response
@CrossOrigin(origins = "http://localhost:4200") 
public class HelloController {

    private final RestTemplate restTemplate = new RestTemplate(); //a HTTP client to fetch rates from currency API.

    @GetMapping("/api/convert") //define a get endpoint at /api/convert
    public double convertCurrency( //method executed when the endpoint is hit.
            //query parameters to expect in URL for endpoint.
            @RequestParam double amount, //float amount to be converted.
            @RequestParam String from, //string code of base currency (ex: USD)
            @RequestParam String to) //string code of target currency (ex: EUR)
            {

        //fetch exchange rates from API
        String url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/" + from.toLowerCase() + ".json"; //construct url for api to fetch exchange rates, using base currency code.
        Map<String, Map<String, Double>> response = restTemplate.getForObject(url, Map.class); //make request, and set response variable to it.
                

        Map<String, Double> rates = response.get(from.toLowerCase()); //set rates variable to given rates for base currency
        double rate = rates.get(to.toLowerCase()); //find conversion for target currency
        
        //return amount with correct conversion.
        return amount * rate;
    }
}