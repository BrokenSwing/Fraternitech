import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BabyService {

  constructor(private http: HttpClient) {}

  getBabiesInfo() {
    return this.http.get<BabyInfo[]>('/api/babies').pipe(
      map((info) => {
        const days: number[] = [];
        const data: {[day: number]: BabyInfo[]} = {};
        info.forEach((i) => {
          if (!days.includes(i.dayNumber)) {
            days.push(i.dayNumber);
            data[i.dayNumber] = [];
          }
          data[i.dayNumber].push(i);
        });
        return {days, data};
      })
    );
  }

}

export interface BabyInfo {
  day: number;
  hash: string;
  dayNumber: number;
  ext: string;
  name: string;
}
