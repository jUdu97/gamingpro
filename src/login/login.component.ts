import { NgModule, Component, OnInit, ViewEncapsulation } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  AbstractControl
} from "@angular/forms";
import {
  MatDialog,
  MatDialogConfig,
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
    MatDialogModule
  ]
})
export class GameLogin implements OnInit {
  gameForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(PassReset, dialogConfig);
    dialogRef
      .afterClosed()
      .subscribe((data) => console.log("Dialog box closed"));
  }

  ngOnInit() {
    this.gameForm = this.formBuilder.group({
      username: ["", [ValidateUser]],
      password: ["", [ValidatePass]]
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

@Component({
  selector: "password-reset",
  templateUrl: "password-reset.html",
  styleUrls: ["password-reset.css"]
})
export class PassReset {
  constructor(private dialogRef: MatDialogRef<PassReset>) {}

  passwordTitle = "Password Reset";
  resetInfo: string = "Enter username below: ";
  sendButtonText: string = "Send";
  closeButtonText: string = "Close";
  successMessage: string = "";

  sendInfo(successMessage: string) {
    console.log("Check your email for the password reset.");
    this.successMessage = "Email sent!";
  }
  onNoClick(): void {
    this.dialogRef.close(true);
  }
}
