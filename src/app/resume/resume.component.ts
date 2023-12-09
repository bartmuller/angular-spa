import { Component } from '@angular/core';
import { CERTIFICATES, RESUME } from '../mock-info';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  resume = RESUME;
  certificate = CERTIFICATES;
}
