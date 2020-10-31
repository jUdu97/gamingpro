import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  NgModule,
  Component,
  OnInit,
  ViewEncapsulation,
  CUSTOM_ELEMENTS_SCHEMA
} from "@angular/core";

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

import { PassReset } from "src/password-reset-dialog/password-reset";
import { UserReset } from "src/username-reset-dialog/username-reset";
import { GameInfo } from "src/game-info-dialog/game-info";
import { HelpInfo } from "src/help-info-dialog/help-info";
import {SuccessMessage} from "src/success-dialog/success-dialog.component";

@Component({
  selector: "login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css"],
  encapsulation: ViewEncapsulation.None
})
@NgModule({
  declarations: [PassReset, UserReset, GameInfo, HelpInfo, SuccessMessage],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [PassReset, UserReset, GameInfo, HelpInfo, SuccessMessage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GameLogin implements OnInit {
  gameForm: FormGroup;
  submitted = false;
  disableDialog: boolean = false;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {}

  openPasswordDialog() {
    const dialogPassword = this.dialog.open(PassReset);
    this.disableDialog = !this.disableDialog;
    dialogPassword.afterClosed().subscribe(() => (this.disableDialog = false));
  }
  openUsernameDialog() {
    const dialogUsername = this.dialog.open(UserReset);
    this.disableDialog = !this.disableDialog;
    dialogUsername.afterClosed().subscribe(() => (this.disableDialog = false));
  }
  openInfoDialog() {
    const dialogGameInfo = this.dialog.open(GameInfo);
    this.disableDialog = !this.disableDialog;
    dialogGameInfo.afterClosed().subscribe(() => (this.disableDialog = false));
  }
  openHelpDialog() {
    const dialogHelpInfo = this.dialog.open(HelpInfo);
    this.disableDialog = !this.disableDialog;
    dialogHelpInfo.afterClosed().subscribe(() => (this.disableDialog = false));
  }
  showSuccessMessage() {
    const dialogSuccess = this.dialog.open(SuccessMessage);
    this.disableDialog = !this.disableDialog;
    dialogSuccess.afterClosed().subscribe(() => (this.disableDialog = false));
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
    this.showSuccessMessage();
  }
}
