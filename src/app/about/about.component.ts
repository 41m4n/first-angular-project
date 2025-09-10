import {Component,inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-about',
  imports: [CommonModule, MatCardModule, MatGridListModule, MatDividerModule, MatListModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
