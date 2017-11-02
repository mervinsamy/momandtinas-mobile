import {Component} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu-carousel',
  templateUrl: './menu-carousel.component.html',
  styleUrls: ['./menu-carousel.component.scss']
})
export class MenuCarouselComponent{
  menu1Img = 'assets/images/menu_1.jpg';
  menu2Img = 'assets/images/menu_2.jpg';
  menu3Img = 'assets/images/menu_3.jpg';
  menu4Img = 'assets/images/menu_4.jpg';

  constructor(config: NgbCarouselConfig) {
    // customize carousel
    config.interval = 10000;
  }
}
