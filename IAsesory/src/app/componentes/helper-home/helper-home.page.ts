import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-helper-home",
  templateUrl: "./helper-home.page.html",
  styleUrls: ["./helper-home.page.scss"],
})
export class HelperHomePage {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  constructor() {}
}
