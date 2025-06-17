import {Component,inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-work-experience',
  imports: [CommonModule, MatCardModule, MatGridListModule, MatDividerModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  images = [
  '../../assets/angular.svg',
  '../../assets/angular.svg',
  '../../assets/logo.svg',
];  
}
