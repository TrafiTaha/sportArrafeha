import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-dispplay-team-players',
  templateUrl: './dispplay-team-players.component.html',
  styleUrls: ['./dispplay-team-players.component.css']
})
export class DispplayTeamPlayersComponent implements OnInit {

  constructor(private tService : TeamService) { }

  ngOnInit() {
    this.tService.getAllTeams().subscribe((res)=>{})
  }

}
