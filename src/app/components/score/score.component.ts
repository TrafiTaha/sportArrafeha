import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { t } from "src/app/data/data";
import { MatchService } from "src/app/services/match.service";

@Component({
  selector: "app-score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.css"],
})
export class ScoreComponent implements OnInit {
  @Input() x: any;
  
  scoreTab: any = t;
  myPath: string;
  id : any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mService: MatchService
  ) {}

  ngOnInit() {}
  scoreColor(scoreOne: number, scoreTwo: number) {
    if (scoreOne > scoreTwo) {
      return "green";
    } else if (scoreOne < scoreTwo) {
      return "red";
    } else {
      return "blue";
    }
  }
  deleteMatch(index: number) {
    this.mService.deleteMatch(index).subscribe()
  }
}
