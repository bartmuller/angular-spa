import { WrappedNodeExpr } from '@angular/compiler';
import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { LETTERS } from '../mock-info';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  letters = LETTERS
  
  ngOnInit() {
    const images = document.querySelectorAll('.contact__word');
    images.forEach((div, index) => {
      setTimeout(function() {
        div.classList.add("fade-in");
      }, index * 200);
    });
  }
}
