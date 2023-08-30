import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { x } from 'src/app/data/data';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  editForm: FormGroup;
  id: number;
  team: any = {};
  teamsTab: any = x;

  constructor() { }

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem("teamId"));
    for (let i = 0; i < this.teamsTab.length; i++) {
      if (this.teamsTab[i].id == this.id) {
        this.team = this.teamsTab[i];
        break;
      }
    }
  }

}
