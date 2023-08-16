import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { ContactSectionComponent } from './units/contact-section/contact-section.component';
import { TestimonialsComponent } from './units/testimonials/testimonials.component';
import { PartnersComponent } from './units/partners/partners.component';
import { ServicesComponent } from './units/services/services.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactSectionComponent,
    TestimonialsComponent,
    PartnersComponent,
    ServicesComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
