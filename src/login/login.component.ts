import { NgModule, Component } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css"]
})
@NgModule({
  imports: [ReactiveFormsModule]
})
export class GameLogin {
  gameForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  });

  onSubmit() {
    console.warn(this.gameForm.value);
  }
}
