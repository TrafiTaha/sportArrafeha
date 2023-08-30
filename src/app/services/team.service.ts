import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamURL: string = "http://localhost:3000/teams";
  constructor(private http: HttpClient) { }
   addTeam(obj) {
    return this.http.post<{msg : string}>(this.teamURL, obj);
  }
  getTeamById(id) {
    return this.http.get(`${this.teamURL}/${id}`);
  }
  deleteTeam(id) {
    return this.http.delete(`${this.teamURL}/${id}`);
  }

  updateTeam(obj) {
    return this.http.put(this.teamURL, obj);
  }
  getAllTeams() {
    return this.http.get<{team : any}>(this.teamURL);
  }
}
