import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Define the application routes
export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'film/:id', component: FilmDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: NotFoundComponent }  // Catch-all for undefined routes
];
