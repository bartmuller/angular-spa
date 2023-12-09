import { WrappedNodeExpr } from '@angular/compiler';
import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { LETTERS } from '../mock-info';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{
  letters = LETTERS

}
