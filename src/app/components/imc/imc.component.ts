import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ImcService } from "src/app/services/imc.service";

@Component({
  selector: "app-imc",
  templateUrl: "./imc.component.html",
  styleUrls: ["./imc.component.css"],
})
export class IMCComponent implements OnInit {
  imcForm: FormGroup;
 resMsg: string;
  constructor(private formBuilder: FormBuilder,
              private imcService : ImcService ) {}

  ngOnInit() {
    this.imcForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      taille: ["", [Validators.required]],
      poids: ["", [Validators.required]],
    });
  }
  calculateIMC() {
}
}
