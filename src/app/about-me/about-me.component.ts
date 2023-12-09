import { Component } from '@angular/core';
import { ABOUTME, INFORMATION } from '../mock-info';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  information = INFORMATION;
  aboutMe = ABOUTME;

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
