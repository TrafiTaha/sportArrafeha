import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  id:any;
  players: any;
  findedPlayer:any;
  constructor() { }

  ngOnInit() {
  }

}
