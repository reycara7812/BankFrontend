import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './features/customer/customer.component';
import { AccountComponent } from './features/account/account.component';
import { BillComponent } from './features/bill/bill.component';
import { WithdrawalComponent } from './features/withdrawal/withdrawal.component';
import { DepositComponent } from './features/deposit/deposit.component';

const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'account', component: AccountComponent },
  { path: 'bill', component: BillComponent },
  { path: 'withdrawal', component: WithdrawalComponent },
  { path: 'deposit', component: DepositComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
