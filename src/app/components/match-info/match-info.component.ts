import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { t } from 'src/app/data/data';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  id: any;
  matches: any = t;
  findedMatch:any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id"); 
    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].id==this.id) {
        this.findedMatch = this.matches[i];
        break;
      }
      
    }
    }     
}



