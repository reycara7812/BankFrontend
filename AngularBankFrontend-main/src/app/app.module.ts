import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbuttonComponent } from './shared/components/navbutton/navbutton.component';
import { DepositComponent } from './features/deposit/deposit.component';
import { WithdrawalComponent } from './features/withdrawal/withdrawal.component';
import { BillComponent } from './features/bill/bill.component';
import { AccountComponent } from './features/account/account.component';
import { CustomerComponent } from './features/customer/customer.component';
import { TableComponent } from './shared/components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NavbuttonComponent,
    DepositComponent,
    WithdrawalComponent,
    BillComponent,
    AccountComponent,
    CustomerComponent,
    TableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
