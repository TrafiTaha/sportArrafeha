import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { a, stadium } from 'src/app/data/data';

@Component({
  selector: 'app-stadium-table',
  templateUrl: './stadium-table.component.html',
  styleUrls: ['./stadium-table.component.css']
})
export class StadiumTableComponent implements OnInit {
  stadiumsTab : any= a;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  displayStadium(id: number){
    this.router.navigate([`stadiuminfo/${id}`]);
  }
  deleteStadium(index: number) {
    this.stadiumsTab.splice(index, 1);
    localStorage.setItem('Stadiums', JSON.stringify(this.stadiumsTab));
  }

}
