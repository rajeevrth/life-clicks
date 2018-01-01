import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { MenuComponent } from './menu/menu.component';
import { DetailComponent } from './services/detail-button/detail.component';
import { RechargeDetailDialog } from './services/recharge/recharge-detail-dialog.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FinanceComponent } from './services/finance/finance.component';




@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MenuComponent,
    DetailComponent,
    RechargeDetailDialog,
    FinanceComponent
  ],
  entryComponents: [RechargeDetailDialog, FinanceComponent],
  imports: [
    BrowserModule, MatMenuModule, BrowserAnimationsModule, AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
