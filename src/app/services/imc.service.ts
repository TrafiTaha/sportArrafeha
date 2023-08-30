import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImcService {
  imcURL: string = "http://localhost:3000/imc";
  calculateIMC: any;
  constructor(private http: HttpClient) { }


  // request to add the imc
addImc(obj) {
  return this.http.post<{imc : any}>(this.imcURL, obj);
}
}

