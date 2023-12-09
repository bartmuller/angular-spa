import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  test() {
    const overlay = document.getElementById('overlay');
    const hamburger = document.getElementById('hamburger');
    const navBox1 = document.getElementById('box1');
    const navBox2 = document.getElementById('box2');

    if(overlay?.classList.contains("overlay--open")) {
      overlay?.classList.remove("overlay--open")
      hamburger?.classList.remove('open')
      navBox1?.classList.remove('box-left')
      navBox2?.classList.remove('box-right')
    } else {
      overlay?.classList.add("overlay--open");
      hamburger?.classList.add('open');
      navBox1?.classList.add('box-left')
      navBox2?.classList.add('box-right')
  }
}
}
