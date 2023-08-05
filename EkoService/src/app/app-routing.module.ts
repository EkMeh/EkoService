import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TeamComponent } from './components/team/team.component';
import { PagesComponent } from './components/pages/pages.component';
import { BlogComponent } from './components/blog/blog.component';
import { AppoinmentComponent } from './components/appoinment/appoinment.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path:'home',redirectTo:''},
  { path:'services', component: ServicesComponent},
  { path:'gallery', component:GalleryComponent },
  { path:'team', component: TeamComponent},
  { path:'pages', component: PagesComponent},
  { path:'blog', component: BlogComponent},
  { path:'appoinment', component: AppoinmentComponent},
  { path:'shop', component: ShopComponent},
  { path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
