// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { FormsModule } from '@angular/forms';
import { InstagramComponent } from './components/instagram/instagram.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './app.component.html',

})
export class AppComponent { 

}
