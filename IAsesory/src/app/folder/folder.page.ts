import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppModule } from "../app.module";
import { AppComponent } from "../app.component";

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"]
})
export class FolderPage implements OnInit {
  public folder: string;
  public index = 0;

  constructor(private appComponent: AppComponent) {}

  ngOnInit() {
    this.index = this.appComponent.selectedIndex;
    this.folder = this.appComponent.appPages[this.index].title;
  }
}
