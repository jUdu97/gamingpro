import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "button-types-example",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})
@NgModule({
  imports: [CommonModule, MatButtonModule],
  exports: [MatButtonModule]
})
export class AngularMaterialModule {}
