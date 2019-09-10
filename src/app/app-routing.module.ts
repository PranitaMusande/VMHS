import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurStaffComponent } from './our-staff/our-staff.component';
import { ExtraActivitesComponent } from './extra-activites/extra-activites.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { SchoolHistoryComponent } from './school-history/school-history.component';


const routes: Routes = [
  {path:'',component:CarouselComponent},
  {path:"about-us", component:AboutUsComponent},
  {path:"contact-us", component:ContactUsComponent},
  {path:"our-staff", component:OurStaffComponent},
  {path:"extra-activites", component:ExtraActivitesComponent},
  {path:"photo-gallery", component:PhotoGalleryComponent},
  {path:"facilities", component:FacilitiesComponent},
  {path:"school-history", component:SchoolHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
