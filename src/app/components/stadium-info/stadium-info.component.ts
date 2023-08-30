import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { a } from 'src/app/data/data';

@Component({
  selector: 'app-stadium-info',
  templateUrl: './stadium-info.component.html',
  styleUrls: ['./stadium-info.component.css']
})
export class StadiumInfoComponent implements OnInit {
  id: any;
  stadiums: any=a;
  findedStadiums:any;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id"); 
    for (let i = 0; i < this.stadiums.length; i++) {
      if (this.stadiums[i].id==this.id) {
        this.findedStadiums = this.stadiums[i];
        break;
      }
      
    }
  }

}
