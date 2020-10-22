import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, AbstractControl } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

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
