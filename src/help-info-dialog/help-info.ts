import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "help-info",
  templateUrl: "help-info.html",
  styleUrls: ["help-info.css"]
})
export class HelpInfo {
  helpTitle = "GamerPro 2086 Tutorial";
  contactEmail = "support@gamepro86.com";
  closeButtonText: string = "Close";

  constructor(private dialogRef: MatDialogRef<HelpInfo>) {}

  onNoClick(): void {
    this.dialogRef.close(true);
  }
}
