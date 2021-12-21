import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  isLoggedIn = true;

  constructor() { }
}
