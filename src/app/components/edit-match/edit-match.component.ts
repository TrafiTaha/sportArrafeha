import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { t } from 'src/app/data/data';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  editForm: FormGroup;
  id: number;
  match: any={};
  matchesTab: any = t;
  constructor() { }

  ngOnInit() {
    this.id= JSON.parse(localStorage.getItem("matchId"));
    for (let i = 0; i < this.matchesTab.length; i++) {
      if (this.matchesTab[i].id==this.id){
      this.match= this.matchesTab[i];
      break;
      }
    }
  }
  validate(){}
}
