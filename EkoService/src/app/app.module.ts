import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PagesComponent } from './components/pages/pages.component';
import { TeamComponent } from './components/team/team.component';
import { BlogComponent } from './components/blog/blog.component';
import { AppoinmentComponent } from './components/appoinment/appoinment.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeSlideBarComponent } from './components/home/home-slide-bar/home-slide-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CurrentTemplateUrlComponent } from './components/current-template-url/current-template-url.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ServicesComponent,
    GalleryComponent,
    PagesComponent,
    TeamComponent,
    BlogComponent,
    AppoinmentComponent,
    ShopComponent,
    ContactComponent,
    HomeSlideBarComponent,
    FooterComponent,
    CurrentTemplateUrlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
