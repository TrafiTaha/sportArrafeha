import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatchService } from "src/app/services/match.service";
@Component({
  selector: "app-add-match",
  templateUrl: "./add-match.component.html",
  styleUrls: ["./add-match.component.css"],
})
export class AddMatchComponent implements OnInit {
  addedMatchs: any = {};
  addMatch: FormGroup;
  constructor(private mService: MatchService) {}

  ngOnInit() {}
  addMatchs() {
    console.log("here added matchs", this.addedMatchs);
    this.mService.addMatch(this.addedMatchs).subscribe();
  }
}
