import { Component, OnInit } from '@angular/core';
import { StarsService } from 'src/app/services/stars.service';

import { ref, onValue } from "firebase/database";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-star-count',
  templateUrl: './star-count.component.html',
  styleUrls: ['./star-count.component.css']
})
export class StarCountComponent implements OnInit {

  //reference to the firebase database.
  db = environment.db;
  //star count shows as a number to the side of the star icon.
  starCount!: number;
  /**
   * temporal star count to be shown when the count is null while being
   * retrieved from firebase
   */
  prevStarCount!: number;
  //shows if the user has starred the website.
  starred!: boolean;

  constructor(public starsService: StarsService) { }


  ngOnInit(): void {
    this.markStar();
    this.getDbStars();
    this.prevStarCount = this.starCount;
  }

  /**
   * creates a listener to value changes on starCount and also sets the
   * temporal value while star count is null.
   */
  getDbStars() {
    let starCountRef = ref(this.db, '/starCount');
    onValue(starCountRef, (snapshot) => {
      if (snapshot.val()) {
        this.prevStarCount = snapshot.val();
      }
      this.starCount = snapshot.val();
    });
  }

  /**
   * checks local storage and sets starred as true or false accordingly
  */
  markStar() {
    this.starsService.loadFromStorage();

    if (this.starsService.starred === 'true') {
      this.starsService.addToStorage('false');
      this.starred = false;

    } else {
      this.starsService.addToStorage('true');
      this.starred = true;
    }
  }

  /**
   * toggles starred between true and false and adds or substratcs from
   * the star count in the database.
   */
  toggleStar() {
    this.markStar();
    this.starsService.toggleStar(this.starred);
    this.getDbStars();
  }


}
