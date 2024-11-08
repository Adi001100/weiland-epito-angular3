// src/app/app-routing.module.ts
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReferenceComponent } from './components/reference/reference.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'references', component: ReferenceComponent },
  //{ path: 'services', component: ServicesComponent },
  //{ path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
