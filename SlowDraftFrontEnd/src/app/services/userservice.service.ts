
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { IUser } from '../models/user';
import { Observable } from 'rxjs';
import { IMyCustomMessage } from '../models/mycustommessage';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  isLoggedIn = true;
  
  public _localClientDomain: string = 'http://localhost:4200/';
  public _localServerDomain: string = 'http://localhost:9090/';

  constructor(private httpClient: HttpClient) { }

  addUserRequest(newUser: IUser): Observable<any> {
    console.log("before");
    console.log(newUser);
    console.log("after");
    return this.httpClient.post<any>(`http://localhost:9090/users/add`, newUser, )
    

  }

  loginRequest(myUser: IUser): Observable<IMyCustomMessage>{

    return this.httpClient.post<IMyCustomMessage>(`http://localhost:9090/users/login`, myUser,
      {withCredentials: true});
  }

  logoutRequest(): Observable<IMyCustomMessage> {

    return this.httpClient.post<IMyCustomMessage>(`http://localhost:9090/users/logout`, {},
      {withCredentials: true});

  }


}