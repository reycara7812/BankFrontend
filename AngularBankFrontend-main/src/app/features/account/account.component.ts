import { Component, OnInit } from '@angular/core';
import { Account } from '../../shared/models/account';
import { AccountService } from '../../core/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent implements OnInit {
  accounts: Account[] = [];
  columns = ['accountId', 'type', 'balance', 'nickname', 'customerId'];
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe({
      next: (value) => {
        this.accounts = value;
      },
      error: (error) => {
        console.error('Error', error);
      },
      complete: () => {
        console.log('Get Accounts has been used.');
      },
    });
  }
}

/*

this.accountService.getAccounts().subscribe(
      (value) => (this.accounts = value),
      (error) => console.error('Error:', error),
      () => {
        let previewCustomers: Account[] = this.accounts;
        console.log(
          'Complete, fuck ' +
            JSON.stringify(previewCustomers) +
            this.accounts.length
        );
      }
    );
*/
