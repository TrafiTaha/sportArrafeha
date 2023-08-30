import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MatchService {
  // BE address
  matchURL: string = "http://localhost:3000/matchs";
  constructor(private http: HttpClient) {}
  // request to add match
  addMatch(obj) {
    return this.http.post<{msg : string}>(this.matchURL, obj);
  }
  // request to get match by ID
  getMatchById(id) {
    // this.http.get(this.matchURL + "/" + id);
    return this.http.get(`${this.matchURL}/${id}`);
  }
  // request to delete match by ID
  deleteMatch(id) {
    return this.http.delete<{msg : string}>(`${this.matchURL}/${id}`);
  }
  // request to edit match
  updateMatch(obj) {
    return this.http.put(this.matchURL, obj);
  }
  // Request to get all matchs
  getAllMatchs() {
    return this.http.get<{matchs : any}>(this.matchURL);
  }
  searchMatchsByScoreOneOrScoreTwo(scoreOne,scoreTwo){
    return this.http.get(this.matchURL);
  }
}
