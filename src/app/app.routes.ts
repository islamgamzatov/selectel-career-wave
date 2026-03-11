import { Routes } from '@angular/router';
import { WelcomePage } from './welcome-page/welcome-page';
import { MenuPage } from './menu-page/menu-page';

export const routes: Routes = [
  { path: '', component: WelcomePage },
  { path: 'menu', component: MenuPage },
  { path: '**', redirectTo: '' }
];