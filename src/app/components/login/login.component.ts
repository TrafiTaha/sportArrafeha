import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import jwt_decode from "jwt-decode";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  // Define user object
  user: any = {};
  loginForm: FormGroup;
  title: any = "Login";
  errorMsg: string = "";
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}
  login() {
    console.log("here user object", this.user);
    this.userService.login(this.user).subscribe((data) => {
      console.log("here data after login", data);
        
      if (data.result) {
        sessionStorage.setItem("token", data.result);
        let decodedToken = this.decodeToken(data.result) as { role: string };
        
        console.log("here decoded token", decodedToken);
        
        if (decodedToken.role == "admin") {
        
          this.router.navigate(['dashboard']); 
        } else {
          
          this.router.navigate(['']);
        }
      } else {
        this.errorMsg = "Please check email/pwd";
      }
    });
  }
  

  decodeToken(token: string) {
    return jwt_decode(token);
  }
}
