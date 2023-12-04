import { Component } from '@angular/core';
import { INFORMATION, ABOUTME, WHATIDO } from '../mock-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  information = INFORMATION;
  aboutMe = ABOUTME;
  whatido = WHATIDO

  title = ""
  d = new Date();
  time = this.d.getHours();
  
  public ngOnInit(): void {
    let text = ""
    if(this.time > 18) {
      text = "Goedeavond!"
  } else if (this.time > 12 ){
      text = "Goedemiddag!"
  } else if(this.time > 5) {
      text= "Goedemorgen!"
  }else if (this.time > 0 ){
      text = "Goedenacht!"
  }
    this.title = text
 }
   

}