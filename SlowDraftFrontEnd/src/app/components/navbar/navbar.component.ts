import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
checkLoggedIn!: boolean;
  constructor(private userService: UserserviceService) { }

  ngOnInit(): void {
    this.checkLoggedIn = this.userService.isLoggedIn;

  }

}
