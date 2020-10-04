import { NgModule, Component, OnInit } from "@angular/core";
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css"]
})
@NgModule({
  imports: [ReactiveFormsModule]
})
export class GameLogin implements OnInit {
  gameForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.gameForm = this.formBuilder.group({
      username: ["", [ValidateUser]]
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.gameForm.invalid) {
      return;
    }
    console.log(this.gameForm.value);
  }
}

function ValidateUser(control: AbstractControl): { [key: string]: any } | null {
  if (control.value !== "goship97") {
    return { userValid: true };
  }

  return null;
}
