import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AngularMaterialModule } from "./buttons";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GameLogin } from "src/login/login.component";

@NgModule({
  declarations: [AppComponent, GameLogin],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    GameLogin
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
