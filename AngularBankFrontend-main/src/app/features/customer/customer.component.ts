import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../../core/services/customer.service';
import { Customer } from '../../shared/models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  columns = ['id', 'firstName', 'lastName', 'addresses'];
  constructor(private customerService: CustomerService) {}

  //next callback is used to handle the next value emitted by the observable.
  //if any errors occur during the observable's lifecycle, the error callback is used
  //the complete callback is option, it is invoked when the obserable completes its lifecycle, whether successful or not.
  ngOnInit(): void {
    this.customerService.getCustomers().subscribe({
      next: (value) => {
        this.customers = value;
      },
      error: (error) => {
        console.error('Error', error);
      },
      complete: () => {
        console.log('Get Customers has been used.');
      },
    });
  }
}
