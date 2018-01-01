import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RechargeDetailDialog } from '../recharge/recharge-detail-dialog.component';
import { LIFECLICKS_CONST } from '../../constants/life-clicks-constants';
import { FinanceComponent } from '../finance/finance.component';

@Component({
  selector: 'detail-button',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  animal: string;
  name: string;
  @Input() page;
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    switch (this.page) {
      case LIFECLICKS_CONST.recharge: {
        let dialogRef = this.dialog.open(RechargeDetailDialog, {
          width: '800px',
          height: '600px',
          data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.animal = result;
        });
        break;
      }
      case LIFECLICKS_CONST.insurance: {
        let dialogRef = this.dialog.open(FinanceComponent, {
          width: '800px',
          height: '600px',
          data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.animal = result;
        });
        break;
      }
      default: {
        break;
      }
    }
  }

  ngOnInit() {
  }

}
