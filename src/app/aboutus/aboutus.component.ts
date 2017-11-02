import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  welcomeFamilyImg: String = 'assets/images/welcometoourfamily.png';
  constructor() { }

  ngOnInit() {
  }
  /*birthdayImg: String = 'assets/images/birthday.jpg';*/

}
