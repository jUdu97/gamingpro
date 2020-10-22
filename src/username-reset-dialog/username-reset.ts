import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, AbstractControl } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "username-reset",
  templateUrl: "username-reset.html",
  styleUrls: ["username-reset.css"]
})
export class UserReset implements OnInit {
  usernameTitle = "Username Reset";
  resetInfo: string = "Enter password below: ";
  sendButtonText: string = "Send";
  closeButtonText: string = "Close";
  successMessage: string = "";

  userResetForm: FormGroup;
  userResetSubmit = false;

  constructor(
    private userFormBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UserReset>
  ) {}

  ResetUserValidate(control: AbstractControl): { [key: string]: any } | null {
    if (control.value !== "coolness") {
      return { resetUserValid: true };
    }
    return null;
  }

  ngOnInit() {
    this.userResetForm = this.userFormBuilder.group({
      userResetText: ["", [this.ResetUserValidate]]
    });
  }
  sendInfo() {
    this.userResetSubmit = true;

    if (this.userResetForm.invalid) {
      return (this.successMessage = "Email not sent. Try a valid password.");
    }
    this.successMessage = "Email sent!";
  }
  onNoClick(): void {
    this.dialogRef.close(true);
  }
}
