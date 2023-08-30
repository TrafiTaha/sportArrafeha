import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { p } from "src/app/data/data";
import { PlayerService } from "src/app/services/player.service";

@Component({
  selector: "app-players-table",
  templateUrl: "./players-table.component.html",
  styleUrls: ["./players-table.component.css"],
})
export class PlayersTableComponent implements OnInit {
  playersTab: any = p;
  constructor(private router: Router, private pService: PlayerService) {}

  ngOnInit() {
    this.reloadData();
  }
  displayPlayer(id: number) {
    this.router.navigate([`playerinfo/${id}`]);
  }
  deletePlayer(id: number) {
    alert(`Player N° ${id} is deleted`);
  }
  editPlayer(id: number) {
    localStorage.setItem("playerId", JSON.stringify(id));
    this.router.navigate([`editplayer`]);
  }
  reloadData() {
    this.pService.getAllPlayers().subscribe((response) => {
      console.log("here response from backend", response);
      this.playersTab = response.player;
    });
  }
}
