import { Component } from "@angular/core";
import { UixLightNotifierService } from "uix-light-notifier";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  constructor(private uixLightNotifierService: UixLightNotifierService) {}
  ver() {
    this.uixLightNotifierService.show("My Meage");
  }
}
