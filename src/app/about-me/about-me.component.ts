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

title = "";
d = new Date();
time = this.d.getHours();

public ngOnInit(): void {
  let text = "";

  switch (true) {
    case this.time > 18:
      text = "Goedeavond!";
      break;
    case this.time > 12:
      text = "Goedemiddag!";
      break;
    case this.time > 5:
      text = "Goedemorgen!";
      break;
    case this.time > 0:
      text = "Goedenacht!";
      break;
    default:
      text = "Goedenacht!"; // Optional: default case if time is not greater than 0 (e.g., midnight)
  }

  this.title = text;
}

}
