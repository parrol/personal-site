import { Injectable } from '@angular/core';
import { ref, runTransaction } from "firebase/database";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarsService {

  //Firebase connected database reference.
  db = environment.db;
  //shows if the user has starred the website.
  starred!: string | null;
  //star count shows as a number to the side of the star icon.
  starCount!: number;

  constructor() { }

  /**
   *
   * @param add determines if a star is going to be added or substracted from the star count.
   */
  toggleStar(add: boolean): void {
    runTransaction(ref(this.db, '/'), (stars) => {
      if (stars) {
        if (add) {
          stars.starCount++;
        } else {
          if (stars.starCount <= 0) {
            stars.starCount = 0;
          } else {
            stars.starCount--
          }
        }
      }
      return stars;
    });
  }

  /**
   *
   * @param star value to be added to the local storage.
   */
  addToStorage(star: string): void {
    localStorage.setItem('starred', star);
  }

  /**
   * loads the value in local storaged, if there isn't one it sets starred as false.
   */
  loadFromStorage(): void {
    if (!localStorage.getItem('starred')) {
      this.starred = 'false';
    } else {
      this.starred = localStorage.getItem('starred');
    }
  }
}
