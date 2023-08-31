import { playersTab } from "./../../data/data";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { PlayerService } from "src/app/services/player.service";
import { TeamService } from "src/app/services/team.service";
@Component({
  selector: "app-add-player",
  templateUrl: "./add-player.component.html",
  styleUrls: ["./add-player.component.css"],
})
export class AddPlayerComponent implements OnInit {
  // Form ID
playerForm: FormGroup;
// player Object
player: any = {};
teamList: any = [];
teamId: any;
constructor(private playerService: PlayerService, private teamService: TeamService)
{ }
ngOnInit() {
this.teamService.getAllTeams().subscribe(
(teams) => {
this.teamList = teams.teamsTab;
}
)
}
addPlayer() {
console.log("Here player object", this.player);
this.player.teamId = this.teamId;
this.playerService.addPlayer(this.player).subscribe(
(response) => {
console.log("Here response from BE", response);
}
);
}
getTeamId(evt) {
this.teamId = evt.target.value;
console.log("Team ID", this.teamId);
}
}