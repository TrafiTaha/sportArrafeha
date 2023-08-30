import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  searchObj: any = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      city: [""],
      country: [""],
    });
  }
  search() {
    localStorage.setItem("seachObj", JSON.stringify(this.searchForm.value));
  }
}
