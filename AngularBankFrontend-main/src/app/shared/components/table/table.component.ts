import { Component, Input } from '@angular/core';
import { Address } from '../../models/address';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];

  getAddressString(addresses: Address[]): string {
    return addresses
      .map(
        (address) =>
          `${address.streetNumber} ${address.streetName}, ${address.city}, ${address.state} ${address.zipCode}`
      )
      .join('<br>');
  }
}
