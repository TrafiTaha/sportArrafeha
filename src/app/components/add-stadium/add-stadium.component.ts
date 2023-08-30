import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { a } from "src/app/data/data";

@Component({
  selector: "app-add-stadium",
  templateUrl: "./add-stadium.component.html",
  styleUrls: ["./add-stadium.component.css"],
})
export class AddStadiumComponent implements OnInit {
  addingForm: FormGroup;
  Stadiums: any = a;
  id: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addingForm = this.formBuilder.group({
      name: [""],
      capacity: ["", [Validators.required]],
      country: ["", [Validators.required]],
    });
  }

  addStadium() {
    const newStadium = { ...this.addingForm.value }; 
    newStadium.id = this.generateId(a); 
    this.Stadiums.push(newStadium); 

    localStorage.setItem("Stadiums", JSON.stringify(this.Stadiums));
  }

  generateId(Stadiums) {
    if (Stadiums.length == 0) {
      return 1;
    } else {
      var max = Stadiums[0].id;
      for (let i = 1; i < Stadiums.length; i++) {
        if (Stadiums[i].id > max) {
          max = Stadiums[i].id;
        }
      }
      return max + 1; 
    }
  }
}
