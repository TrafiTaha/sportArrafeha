import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherURL: string = "http://localhost:3000/weather";
  constructor(private httpClient: HttpClient) { }
  weather (obj){
    return this.httpClient.post<{result : any}>(this.weatherURL, obj);
  }
}
