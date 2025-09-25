import {Component, ChangeDetectionStrategy, ViewChild, AfterViewInit} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {WorkExperienceComponent} from './work-experience/work-experience.component';
import {EducationComponent} from './education/education.component';
import { TestNavigationComponent } from './test-navigation/test-navigation.component';
import {RouterLink, RouterOutlet} from '@angular/router';
import { MatSidenavModule, MatSidenav} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, WorkExperienceComponent, EducationComponent, TestNavigationComponent, RouterLink,RouterOutlet, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, CommonModule],
  // template: `
  //   <main>
  //     <a [routerLink]="['/']">
  //       <header class="brand-name">
  //         <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
  //       </header>
  //     </a>
  //     <section class="content">
  //       <router-outlet></router-outlet>
  //     </section>
  //   </main>
  // `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Resume';
  isSmallScreen = false;

   @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        if (result.matches) {
        // Small screen → overlay mode + close by default
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        // Large screen → side mode + open by default
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
      });
  }
}
