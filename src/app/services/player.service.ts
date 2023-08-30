import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  playerUrl: string = "http://localhost:3000/player";
  constructor(private http: HttpClient) {}
  addPlayer(playerObj) {
    return this.http.post<{ msg: string }>(this.playerUrl, playerObj);
  }
  getPlayerById(id) {
    return this.http.get(`${this.playerUrl}/${id}`);
  }
  deletePlayer(id) {
    return this.http.delete<{ msg: string }>(`${this.playerUrl}/${id}`);
  }
  updatePlayer(obj) {
    return this.http.put(this.playerUrl, obj);
  }
  getAllPlayers() {
    return this.http.get<{ player: any }>(this.playerUrl);
  }
}
