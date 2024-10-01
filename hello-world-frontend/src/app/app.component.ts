import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloService } from './hello.service';

@Component({ //decorator that defines metadata for the component
  selector: 'app-root', //name of this component in an HTML file, i.e <app-root></app-root>
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html', //points to the html file that defines the UI for this component.
  styleUrl: './app.component.css' //points to the file with the styling for this component.
})
export class AppComponent implements OnInit{ //declare the class to implement the OnInit interface, so it must define ngOnInit()
  title = 'hello-world-frontend';
  helloMessage: string = ''; //define a new variable helloMessage as type string to hold the response from the backend.

  constructor(private helloService: HelloService) { } //injects an instance of helloService into the component.

  ngOnInit(){ //called when the component is initialized, must be defined since this class implements the OnInit interface
    //calls the getHello from the services, which returns an Observable<string> representing a stream of data from the backend.
    //.subscribe listens for the message, and when it is received, runs the callback function to set helloMessage.
    this.helloService.getHello().subscribe((message) => {
      this.helloMessage = message;
    })
  }
}
