import { Component, OnInit } from '@angular/core';
import { Withdrawal } from '../../shared/models/withdrawal';
import { WithdrawalService } from '../../core/services/withdrawal.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrl: './withdrawal.component.css',
})
export class WithdrawalComponent implements OnInit {
  withdrawals: Withdrawal[] = [];
  columns: string[] = ['id', 'amount', 'description', 'transaction_date'];

  constructor(private withdrawalService: WithdrawalService) {}

  ngOnInit(): void {
    this.withdrawalService.getWithdrawals().subscribe({
      next: (value) => {
        this.withdrawals = value;
      },
      error: (error) => {
        console.error('Error', error);
      },
      complete: () => {
        console.log('Get Withdrawals has been used.');
      },
    });
  }
}
