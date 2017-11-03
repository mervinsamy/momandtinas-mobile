import { Component} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent{
  pecanImg = 'assets/images/pecan_cupcakes.jpg';
  bbqBurgerImg = 'assets/images/bacon_bbq_burger.jpg';
  banofeeImg = 'assets/images/banofee_pie.jpg';
  bbqBeefBellyImg = 'assets/images/bbq_beef_belly.jpg';
  beefTapaImg = 'assets/images/beef_tapa.jpg';
  cakeImg = 'assets/images/cake.jpg';
  cinnamonBunsImg = 'assets/images/cinnamon_buns.jpg';
  /* cornedBeefImg = 'assets/images/corned_beef.png';*/
  grilledMixedSausageImg = 'assets/images/grilled_mixed_sausage.jpg';
  sausageEggSandwichImg = 'assets/images/sausage_and_egg_sandwich.jpg';
  shepherdPieImg = 'assets/images/shepherd_pie.jpg';

  constructor(config: NgbCarouselConfig) {
    // customize carousel
    config.interval = 4000;
  }



}
