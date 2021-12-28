import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailValid = true;
  userAccount: IUser= 
  {
  userId: 0,
  username:'', 
  password:'',
  email:''
 
  }
  confirmPassword = '';
  constructor(private userService: UserserviceService, private router: Router) { }


  ngOnInit(): void {
  }
  registerButtonClicked(){

    if(this.userAccount.email.includes('@') == false || this.userAccount.email.includes('.') == false ){
      
    document.getElementById('emailError')!.innerHTML = "Email must include '@' and '.' symbols.";
    this.clearForm();

    }
    else if(this.userAccount.password != this.confirmPassword || this.userAccount.password.length == 0){
      document.getElementById('passwordError')!.innerHTML = "Passwords do not match.";
      this.clearForm();

     



    } 
    else {   
    this.userService.addUserRequest(this.userAccount).subscribe(data => {
    });
      this.router.navigateByUrl('/login')
    }
}
clearForm(){
  this.userAccount.password = '';
  this.userAccount.email = '';
  this.userAccount.username = '';
  this.confirmPassword = '';
}

clearError(){
  document.getElementById('emailError')!.innerHTML = "";
  document.getElementById('passwordError')!.innerHTML = "";

}

}
