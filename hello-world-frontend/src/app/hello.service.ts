import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private http: HttpClient) { }

  convertCurrency(amount: number, fromCurrency: string, toCurrency: string): Observable<number> {
    return this.http.get<number>(`http://localhost:8080/api/convert?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
  }
}
