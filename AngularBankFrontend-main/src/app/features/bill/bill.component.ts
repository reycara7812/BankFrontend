import { Component, OnInit } from '@angular/core';
import { Bill } from '../../shared/models/bill';
import { BillService } from '../../core/services/bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.css',
})
export class BillComponent implements OnInit {
  bills: Bill[] = [];
  columns: string[] = [
    'id',
    'status',
    'nickname',
    'payment_amount',
    'payment_date',
  ];

  constructor(private billService: BillService) {}

  ngOnInit(): void {
    this.billService.getBills().subscribe({
      next: (value) => {
        this.bills = value;
      },
      error: (error) => {
        console.error('Error', error);
      },
      complete: () => {
        console.log('Get Bills has been used.');
      },
    });
  }
}
