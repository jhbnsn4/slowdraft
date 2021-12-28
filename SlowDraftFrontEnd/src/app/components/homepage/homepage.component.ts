import { Component, OnInit } from '@angular/core';
import { PLAYERS } from 'src/app/data/playerlist';
import { IPlayer } from 'src/app/models/player';
import { PlayerserviceService } from 'src/app/services/playerservice.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  players: IPlayer[] = [];
  items: IPlayer[] = [];
  selected = [
   
  ];

  constructor(private playerService: PlayerserviceService) { }

  ngOnInit(): void {
    this.getPlayers();
  }



  getPlayers(){
  this.playerService.getPlayers().subscribe(
      players => {

        this.players = Array.from(players);
        this.items = Array.from(players);
        

      });;

}



}


