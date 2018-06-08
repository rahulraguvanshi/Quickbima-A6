import { Routes, RouterModule } from '@angular/router';


import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { HomeLayoutComponent } from './_layout/home-layout/home-layout.component';


import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CarFormComponent } from './car-form/car-form.component';
import { HealthFormComponent } from './health-form/health-form.component';

const appRoutes: Routes = [
    //Homepage routes goes here
    { 
        path: '', 
        component: HomeLayoutComponent,
        children: [
          { path: '', component: CarFormComponent },
          { path: 'healthinsurance', component: HealthFormComponent }
        ]
    },
    //Site routes goes here
    { 
        path: '', 
        component: SiteLayoutComponent,
        children: [
          { path: 'about', component: AboutComponent },
          { path: 'test/:id', component: AboutComponent }
        ]
    },
    // App routes goes here here
    { 
        path: '',
        component: AppLayoutComponent, 
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'profile', component: ProfileComponent }
        ]
    },

    //no layout routes
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


