import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  test() {
    const overlay = document.getElementById('overlay');
    
    if(overlay?.classList.contains("overlay--open")) {
      overlay?.classList.remove("overlay--open")
    } else
    overlay?.classList.add("overlay--open")
  }
}
