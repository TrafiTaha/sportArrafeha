import { playersTab } from './../../data/data';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { PlayerService } from 'src/app/services/player.service';
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  addPlayer: FormGroup;
  addedPlayer: any={};
  title: any="Add Player";
  playerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private pService: PlayerService) { }

  ngOnInit() {
  }
  addPlayers(){
    console.log("here added player", this.addedPlayer);
    this.pService.addPlayer(this.playerForm.value).subscribe((response)=>{console.log("Here response from BE", response);
  });
  }

}
