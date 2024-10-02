import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloService } from './hello.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({ //decorator that defines metadata for the component
  selector: 'app-root', //name of this component in an HTML file, i.e <app-root></app-root>
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf], 
  templateUrl: './app.component.html', //points to the html file that defines the UI for this component.
  styleUrl: './app.component.css' //points to the file with the styling for this component.
})
export class AppComponent{ 
  title = 'hello-world-frontend';
  amount: number = 0;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  convertedAmount: number | null = null;

  constructor(private helloService: HelloService) { } //injects an instance of helloService into the component.
 
  convertCurrency() {
    console.log("wow")
    this.helloService.convertCurrency(this.amount, this.fromCurrency, this.toCurrency)
      .subscribe((result: number) => {
        this.convertedAmount = result;
      });
  }
}
