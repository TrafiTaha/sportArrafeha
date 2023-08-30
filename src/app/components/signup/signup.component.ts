import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  ch: string = "hello";
  usersTab: any = [];
  myPath: string;
  imagePreview: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.myPath = this.router.url;
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
      email: [""],
      pwd: ["", [Validators.required, Validators.minLength(8)]],
      tel: ["", [Validators.required]],
      img: [""],
    });
  }
  signup() {
    if (this.myPath == "/subscription") {
      this.signupForm.value.role = "user";
    } else {
      this.signupForm.value.role = "admin";
    }

    this.userService.signup( this.signupForm.value , this.signupForm.value.img ).subscribe(
      (data) => {
        console.log("Data after signup:", data.msg);
        this.signupForm.reset();
      },
      (error) => {
        console.log("Error during signup:", error);
      }
    );
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
