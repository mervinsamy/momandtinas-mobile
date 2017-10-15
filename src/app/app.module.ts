import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AnnouncementsComponent,
    FooterComponent,
    CarouselComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, NavigationComponent, FooterComponent, CarouselComponent]
})
export class AppModule { }
