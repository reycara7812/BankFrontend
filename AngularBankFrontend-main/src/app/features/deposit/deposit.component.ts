import { Component, OnInit } from '@angular/core';
import { Deposit } from '../../shared/models/deposit';
import { DepositService } from '../../core/services/deposit.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css',
})
export class DepositComponent implements OnInit {
  deposits: Deposit[] = [];
  columns: string[] = ['id', 'amount', 'description', 'transaction_date'];

  constructor(private depositService: DepositService) {}

  ngOnInit(): void {
    this.depositService.getDeposits().subscribe({
      next: (value) => {
        this.deposits = value;
      },
      error: (error) => {
        console.error('Error', error);
      },
      complete: () => {
        console.log('Get Deposits has been used.');
      },
    });
  }
}
