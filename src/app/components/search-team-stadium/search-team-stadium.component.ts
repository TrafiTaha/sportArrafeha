import { stadium, teams } from "./../../data/data";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-search-team-stadium",
  templateUrl: "./search-team-stadium.component.html",
  styleUrls: ["./search-team-stadium.component.css"],
})
export class SearchTeamStadiumComponent implements OnInit {
  stadiums: any = stadium;
  searchTeam: any;
  foundStadium: any;
  teams: any = teams;
  searchForm: FormGroup;
  searchObj: any = [];
  matchingTeams: any;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      stadium: ["", [Validators.required, Validators.minLength(3)]],
    });
  }
  search() {
    this.searchTeam = this.searchForm.get("stadium").value;

     this.foundStadium = this.stadiums.find((stadium: any) =>
      stadium.name.toLowerCase().includes(this.searchTeam.toLowerCase())
    );

    if (this.foundStadium) {
      var stadiumId = this.foundStadium.id;
      console.log("Stadium ID:", stadiumId);

       this.matchingTeams = this.teams.filter(
        (team: any) => team.stadium === stadiumId
      );

      if (this.matchingTeams.length > 0) {
        console.log("Matching Teams:", this.matchingTeams);
      } else {
        console.log("Stadium not found.");
      }
    }
  }
}
