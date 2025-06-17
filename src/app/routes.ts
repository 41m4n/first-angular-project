import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { TestNavigationComponent } from './test-navigation/test-navigation.component';

const routeConfig: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  //   title: 'Home page',
  // },
  // {
  //   path: 'details/:id',
  //   component: DetailsComponent,
  //   title: 'Home details',
  // },

  
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'test-navigation', component: TestNavigationComponent },
];
export default routeConfig;