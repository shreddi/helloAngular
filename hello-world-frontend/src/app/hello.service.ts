import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({  //mark this class as a service that can be injected into other parts of the angular app.
  providedIn: 'root' //create one instance of this service and use it for the whole app
})
export class HelloService {

  constructor(private http: HttpClient) { } //inject http as a private member of this class

  //function to use api call with an amount, a base currency, and a target currency. 
  //returns an Observable<number> which is a stream of data that eventually emits the result of the conversion.
  convertCurrency(amount: number, fromCurrency: string, toCurrency: string): Observable<number> { 
    //sends a get request to the api and expects a number back. The url is configured with the amount, fromCurrency, and toCurrency parameters.
    return this.http.get<number>(`http://localhost:8080/api/convert?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
  }
}
