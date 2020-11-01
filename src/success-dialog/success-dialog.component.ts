import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "success-dialog",
  templateUrl: "success-dialog.component.html",
  styleUrls: ["success-dialog.component.css"]
})
export class SuccessMessage {
  successTitle = "SUCCESS!";
  closeButtonText: string = "Close";

  constructor(private dialogRef: MatDialogRef<SuccessMessage>) {}

  onNoClick(): void {
    this.dialogRef.close(true);
  }
}