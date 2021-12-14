import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullStars'
})
export class NullStarsPipe implements PipeTransform {

  /**
   * @param starCount current start count that could be null while the value is being retrieved from firebase
   * @param prev previous valid start count to be shown while the retrieved value is null
   * @returns prev star count if current is null and current star coount otherwise
   */
  transform(starCount: number | undefined, prev: number): number {
    if (starCount == null) {
      return prev;
    }
    return starCount;
  }

}
