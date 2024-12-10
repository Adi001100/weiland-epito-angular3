// src/app/routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { GalleryComponent } from './components/gallery/gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'references', component: ReferenceComponent },
  //{ path: 'services', component: ServicesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
