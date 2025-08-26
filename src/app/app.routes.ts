import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';

export const routes: Routes = [ 
	{ path: '', component: HomeComponent }, 
    { path: 'tutorial', component: TutorialComponent } 
];
