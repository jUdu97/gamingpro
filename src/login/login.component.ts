import {
  NgModule,
  Component,
  OnInit,
  ViewEncapsulation,
  CUSTOM_ELEMENTS_SCHEMA
} from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  AbstractControl
} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";

import { PassReset } from "src/login/password-reset";
import { UserReset } from "src/login/username-reset";

@Component({
  selector: "login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css"],
  encapsulation: ViewEncapsulation.None
})
@NgModule({
  declarations: [PassReset, UserReset],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [PassReset, UserReset],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GameLogin implements OnInit {
  gameForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {}

  openPasswordDialog() {
    const dialogRef = this.dialog.open(PassReset);
    dialogRef.afterClosed().subscribe(() => console.log("Dialog box closed"));
  }
  openUsernameDialog() {
    const dialogRef = this.dialog.open(UserReset);
    dialogRef.afterClosed().subscribe(() => console.log("Dialog box closed"));
  }

  ValidateUser(control: AbstractControl): { [key: string]: any } | null {
    if (control.value !== "goship97") {
      return { userValid: true };
    }
    return null;
  }
  ValidatePass(control: AbstractControl): { [key: string]: any } | null {
    if (control.value !== "coolness") {
      return { passValid: true };
    }

    return null;
  }

  ngOnInit() {
    this.gameForm = this.formBuilder.group({
      username: ["", [this.ValidateUser]],
      password: ["", [this.ValidatePass]]
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.gameForm.invalid) {
      return window.alert("Needs valid input");
    }
    console.log(this.gameForm.value);
  }
}
