import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/LoginComponent';
import { HomeComponent } from './home/HomeComponent';
import { AppComponent } from './app.component';


const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'index', component: AppComponent }


    // otherwise redirect to home
  //  { path: 'index', redirectTo: '/app' }
];

export const routing = RouterModule.forRoot(appRoutes);