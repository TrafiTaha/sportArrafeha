import { FormGroup, Validators, FormBuilder } from "@angular/forms"; // Import FormBuilder from the same module
import { Component, OnInit } from "@angular/core";
import { playersTab } from "src/app/data/data";

@Component({
  selector: "app-search-player",
  templateUrl: "./search-player.component.html",
  styleUrls: ["./search-player.component.css"],
})
export class SearchPlayerComponent implements OnInit {
  searchPlayer: string;
  players: any[] = playersTab;
  foundedPlayer: any;
  searchForm: FormGroup;
  matchingPlayers: any[];
  errorMsg: string = "player not found";

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      name: ["", [Validators.required]],
      age: ["", [Validators.required]],
    });
  }
  search() {
    this.searchPlayer = this.searchForm.get("name").value;
    let searchAge = this.searchForm.get("age").value;

    this.foundedPlayer = this.players.find(
      (player: any) =>
        player.name.toLowerCase().includes(this.searchPlayer.toLowerCase()) ||
        (player.age !== undefined && player.age === searchAge)
    );

    if (this.foundedPlayer) {
      var playerId = this.foundedPlayer.id;
      console.log("player ID:", playerId);

      this.matchingPlayers = this.players.filter(
        (player: any) =>
          player.id == playerId ||
          (player.age != undefined && player.age == searchAge)
      );

      if (this.matchingPlayers.length > 0) {
        console.log("Matching players:", this.matchingPlayers);
      } else {
        console.log(this.errorMsg);
      }
    }
  }
}
