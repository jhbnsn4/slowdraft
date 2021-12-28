import { Injectable } from '@angular/core';
import { PLAYERS } from '../data/playerlist';
import { IPlayer } from '../models/player';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerserviceService {

  constructor() { }


  getPlayers(): Observable<IPlayer[]> {
    const players = of(PLAYERS);
    return players;
  }
}
