import { teams } from './../../data/data';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { x } from 'src/app/data/data';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnInit {
  teamsTab: any;
  teams : any = [];
  constructor(private router:Router,
              private tService: TeamService) { }

  ngOnInit() {
    this.reloadData();
  }
  displayTeam(id:number){
    alert(`Team N° ${id} is displayed`)
  }
  deleteTeam(id:number){
    alert(`Team N° ${id} is deleted`)
  }
  editTeam(id:number){
    localStorage.setItem("teamId", JSON.stringify(id));
    this.router.navigate(['editteam'])
  }
  reloadData() {
    this.tService.getAllTeams().subscribe(
      (response) => {
        console.log("here response from backend", response);
        this.teams = response.teamsTab;
      });
}}
