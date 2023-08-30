import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { WeatherService } from "src/app/services/weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"],
})
export class WeatherComponent implements OnInit {
  weatherForm: FormGroup;
  weatherTab: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.weatherForm = this.formBuilder.group({
      city: ["", [Validators.required]],
    });
  }
  weather() {
    console.log("here weather object", this.weatherForm.value);

    this.weatherService.weather(this.weatherForm.value).subscribe((data) => {
      console.log("Here response from BE:", data);
      this.weatherTab = data;
    });
  }
}
