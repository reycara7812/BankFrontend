import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Customer } from '../../shared/models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://localhost:8080/customers';

  constructor(private httpClient: HttpClient) {}

  //the observable should be a stream of customers / customer[]. The get will be of type any because it is getting a custom response.
  getCustomers(): Observable<Customer[]> {
    return this.httpClient
      .get<any>(`${this.apiUrl}`)
      .pipe(map((response) => response.body.data));
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.apiUrl}/${id}`);
  }

  createCustomer(customer: Customer) {
    return this.httpClient.post<Customer>(`${this.apiUrl}`, customer);
  }

  updateCustomer(id: number, customer: Customer) {
    return this.httpClient.put<Customer>(`${this.apiUrl}/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.httpClient.delete<Customer>(`${this.apiUrl}/${id}`);
  }

  /*
  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<any>(`${this.apiUrl}`).pipe(
      map((response) =>
        response.body.data.map((customer) => ({
          id: customer.id,
          firstName: customer.firstName,
          lastName: customer.LastName,
        }))
      )
    );
  }
  */

  //we use observables because it has advantages to asynchronous operations, consistent api, support for multiple values, and error handling.
  //Asynchronous Operations: Http requests are async. Observables provide a clean and consistent way to handle them.
  //Consisent API: HttpClient returns observables by default, so explicitly declaring them makes sure everything is consistent.
  //Support for Mutliple Values: Observables are streams of data, which can be used where values need to be emitted overtime (data streaming / websocket communication)
  //Error Handling: Observables provide operators. Some operaters allow us to catch errors in a centralized, convenient way. Leads to more maintainable code.
}
