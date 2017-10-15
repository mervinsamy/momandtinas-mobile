import { Component} from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent{
  breakfastImg: String = 'assets/images/breakfast.png';
  greenhillsImg: String = 'assets/images/greenhills_branch.jpg';
  birthdayImg: String = 'assets/images/birthday.jpg';
}
