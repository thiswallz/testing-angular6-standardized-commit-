import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { UixLightNotifierModule } from "uix-light-notifier";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UixLightNotifierModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
