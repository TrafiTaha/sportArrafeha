import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { p } from "src/app/data/data";

@Component({
  selector: "app-edit-player",
  templateUrl: "./edit-player.component.html",
  styleUrls: ["./edit-player.component.css"],
})
export class EditPlayerComponent implements OnInit {
  editForm: FormGroup;
  id: number;
  player: any = {};
  playerTab: any = p;
  constructor() {}

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem("playerId"));
    for (let i = 0; i < this.playerTab.length; i++) {
      if (this.playerTab[i].id == this.id) {
        this.player = this.playerTab[i];
        break;
      }
    }
  }
  Validate() {}
}
