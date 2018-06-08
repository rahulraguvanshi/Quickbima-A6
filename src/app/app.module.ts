import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { HomeLayoutComponent } from './_layout/home-layout/home-layout.component';
import { HomeHeaderComponent } from './_layout/home-header/home-header.component';
import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

import { routing } from './app.routing';
import { CarFormComponent } from './car-form/car-form.component';
import { HealthFormComponent } from './health-form/health-form.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { CarQuotesComponent } from './car-quotes/car-quotes.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgSelectModule, routing ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    AppLayoutComponent, 
    SiteLayoutComponent,
    HomeLayoutComponent,
    AppHeaderComponent, 
    SiteHeaderComponent, 
    SiteFooterComponent, 
    LoginComponent, 
    DashboardComponent,
    AboutComponent, 
    RegisterComponent, 
    ProfileComponent,
    HomeHeaderComponent,
    CarFormComponent,
    HealthFormComponent,
    HomeContentComponent,
    CarQuotesComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
