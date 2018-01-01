import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'recharge-detail-dialog',
  templateUrl: 'recharge-detail-dialog.html',
  styleUrls: ['../detail-button/detail.component.css']
})
export class RechargeDetailDialog {

  constructor(
    public dialogRef: MatDialogRef<RechargeDetailDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  navigateTo(): void {
    this.dialogRef.close();
  }

}