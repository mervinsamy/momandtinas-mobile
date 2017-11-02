import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MenuCarouselComponent } from './menu-carousel/menu-carousel.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AnnouncementsComponent,
    FooterComponent,
    CarouselComponent,
    ContactUsComponent,
    MenuCarouselComponent,
    HeaderComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, FooterComponent, CarouselComponent]
})
export class AppModule { }
