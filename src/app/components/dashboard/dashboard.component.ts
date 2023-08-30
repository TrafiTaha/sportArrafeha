import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  actualDate: Date = new Date()
  title: string= "dashboard Admin";
  pageOfItems: Array<any>;
  constructor() { }

  ngOnInit() {
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }
}
