import { Component } from '@angular/core';
import { WHATIDO } from '../mock-info';

@Component({
  selector: 'app-what-i-do',
  templateUrl: './what-i-do.component.html',
  styleUrls: ['./what-i-do.component.scss']
})
export class WhatIDoComponent {
  whatido = WHATIDO
}
