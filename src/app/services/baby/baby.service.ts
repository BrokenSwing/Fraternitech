import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BabyService {

  constructor(private http: HttpClient) {}

  getAvailableImages() {
    return this.http.get<BabyImage[]>('/api/babies');
  }

}

export class BabyImage {

  hash: string;
  name?: string;
  day: string;
  dayNumber: number;

}
