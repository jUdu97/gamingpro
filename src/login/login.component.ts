import { NgModule, Component, OnInit } from "@angular/core";
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  AbstractControl
} from "@angular/forms";
import { MatTooltipModule, TooltipPosition} from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: "login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css"]
})
@NgModule({
  imports: [ReactiveFormsModule,  
    MatTooltipModule, 
    MatButtonModule,
    BrowserAnimationsModule
  ]
})
export class GameLogin implements OnInit {
  gameForm: FormGroup;
  submitted = false;
  
 

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.gameForm = this.formBuilder.group({
      username: ["", [ValidateUser]],
      password: ["", [ValidatePass]]
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.gameForm.invalid) {
      return window.alert("Needs input");
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
function ValidatePass(control: AbstractControl): { [key: string]: any } | null {
  if (control.value !== "coolness") {
    return { passValid: true };
  }

  return null;
}
