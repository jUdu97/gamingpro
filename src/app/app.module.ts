import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

import { AngularMaterialModule } from "./buttons";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTooltipModule } from "@angular/material/tooltip";
import { GameLogin, PassReset } from "src/login/login.component";
import "hammerjs";

@NgModule({
  declarations: [AppComponent, GameLogin, PassReset],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    GameLogin
  ],
  providers: [],
  entryComponents: [PassReset],
  bootstrap: [AppComponent]
})
export class AppModule {}
