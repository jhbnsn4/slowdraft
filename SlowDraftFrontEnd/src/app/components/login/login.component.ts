import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFailed: boolean =false;
 emailName: string = ""
  userAccount: IUser= 
  {
    'userId':0,
    'username':'', 
    'password':'',
    'email':'',
  }
  constructor(private router: Router, private userService: UserserviceService) { }

  ngOnInit(): void {
  }


  userNameOrEmail(email: string){
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
  }


  login(){
 

  this.userService.loginRequest(this.userAccount).subscribe(data => {
    if(data.message==="Unsuccessfull login"){
      
    console.log("WE ARE IN LOGIN success THE data IS: ");
    console.log(data);
    console.log("FIN");
  
      this.router.navigate(['/login']);
      this.emailName=""
      this.userAccount.password=""
      this.loginFailed=true;

    } else{   

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userId", data.otherPossibleInformation);
      this.router.navigate(['/homepage']);
    }
  });
}

}
