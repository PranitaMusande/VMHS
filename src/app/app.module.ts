import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurStaffComponent } from './our-staff/our-staff.component';
import { ExtraActivitesComponent } from './extra-activites/extra-activites.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { SchoolHistoryComponent } from './school-history/school-history.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    FooterComponent,
    CarouselComponent,
    LandingPageComponent,
    ContactUsComponent,
    OurStaffComponent,
    ExtraActivitesComponent,
    PhotoGalleryComponent,
    FacilitiesComponent,
    SchoolHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
