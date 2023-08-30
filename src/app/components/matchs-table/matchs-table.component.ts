import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { t } from 'src/app/data/data';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matchs-table',
  templateUrl: './matchs-table.component.html',
  styleUrls: ['./matchs-table.component.css']
})
export class MatchsTableComponent implements OnInit {
  // Array of objects
  matchesTab: any;
  pageOfItems: Array<any>;
  constructor(private router:Router, private mService : MatchService) {}

  ngOnInit() {
    this.reloadData();
  }
  displayMatch(id:number){
    this.router.navigate([`matchinfo/${id}`]);
  }
  deleteMatch(id: number) {
    this.mService.deleteMatch(id).subscribe(
      (response) => {
        console.log(`Match N° ${id} is deleted`);
        this.reloadData();
      },
      (error) => {
        console.error('Error deleting match:', error);
      }
    );
  }
  editMatch(id: number) {
    this.mService.getMatchById(id).subscribe(
      (match) => {
        localStorage.setItem('editMatch', JSON.stringify(match));
        this.router.navigate([`editmatch`]);
      },
      (error) => {
        console.error('Error fetching match details:', error);
      }
    );
  }
  reloadData() {
    this.mService.getAllMatchs().subscribe(
      (response) => {
        console.log("here response from backend", response);
        this.matchesTab = response.matchs;
      });
      
  }
  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;
    }

}
