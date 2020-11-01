import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "game-info",
  templateUrl: "game-info.html",
  styleUrls: ["game-info.css"]
})
export class GameInfo {
  infogameTitle = "GamerPro 2086";

  closeButtonText: string = "Close";

  constructor(private dialogRef: MatDialogRef<GameInfo>) {}

  onNoClick(): void {
    this.dialogRef.close(true);
  }
}
