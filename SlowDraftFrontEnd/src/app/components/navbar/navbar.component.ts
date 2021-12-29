import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
checkLoggedIn!: boolean;
loggedInSubscription: Subscription = new Subscription;

  constructor(private userService: UserserviceService,  private router: Router) { }

  ngOnInit(): void {
    this.loggedInSubscription = this.userService.loggedInMessage.subscribe(message => this.checkLoggedIn = message)



  }
  logoutClicked(){
    this.userService.setIsLoggedIn(false);
    this.router.navigateByUrl('/login');

  }

}
