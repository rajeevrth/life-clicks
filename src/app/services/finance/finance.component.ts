import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['../detail-button/detail.component.css']
})
export class FinanceComponent {
  constructor(
    public dialogRef: MatDialogRef<FinanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
