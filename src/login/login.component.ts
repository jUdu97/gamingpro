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
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css"],
  encapsulation: ViewEncapsulation.None
})
@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GameLogin implements OnInit {
  gameForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(PassReset);
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

@Component({
  selector: "password-reset",
  templateUrl: "password-reset.html",
  styleUrls: ["password-reset.css"]
})
export class PassReset implements OnInit {
  passwordTitle = "Password Reset";
  resetInfo: string = "Enter username below: ";
  sendButtonText: string = "Send";
  closeButtonText: string = "Close";
  successMessage: string = "";

  passResetForm: FormGroup;
  passResetSubmit = false;

  constructor(
    private passFormBuilder: FormBuilder,
    private dialogRef: MatDialogRef<PassReset>
  ) {}

  ResetPassValidate(control: AbstractControl): { [key: string]: any } | null {
    if (control.value !== "goship97") {
      return { resetPassValid: true };
    }
    return null;
  }

  ngOnInit() {
    this.passResetForm = this.passFormBuilder.group({
      passResetText: ["", [this.ResetPassValidate]]
    });
  }
  sendInfo() {
    this.passResetSubmit = true;

    if (this.passResetForm.invalid) {
      return (this.successMessage = "Email not sent. Try a valid username.");
    }
    this.successMessage = "Email sent!";
  }
  onNoClick(): void {
    this.dialogRef.close(true);
  }
}
