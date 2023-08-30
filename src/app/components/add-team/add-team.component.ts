import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  addedTeam: any={};
  addTeam: FormGroup;
  title: any="Add Team";

  constructor(private tService: TeamService) { }

  ngOnInit() {
  }
  addTeams(){
    console.log("here added matchs", this.addedTeam);
    this.tService.addTeam(this.addedTeam).subscribe();
  }
}
