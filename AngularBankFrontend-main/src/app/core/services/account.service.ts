import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Account } from '../../shared/models/account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'http://localhost:8080/accounts';
  private createAccountUrl = 'http://localhost:8080/customers';
  constructor(private httpClient: HttpClient) {}

  //the observable should be a stream of customers / customer[]. The get will be of type any because it is getting a custom response.
  getAccounts(): Observable<Account[]> {
    return this.httpClient.get<any>(`${this.apiUrl}`).pipe(
      map((response) =>
        response.body.data.map((account: any) => ({
          accountId: account.accountId,
          customerId: account.customer.id,
          type: account.type,
          nickname: account.nickname,
          balance: account.balance,
          rewardPoints: account.rewardPoints,
        }))
      )
    );
  }

  getAccountById(id: number): Observable<Account> {
    return this.httpClient.get<Account>(`${this.apiUrl}/${id}`);
  }

  createAccount(customerId: number, account: Account) {
    return this.httpClient.post<Account>(
      `${this.createAccountUrl}/${customerId}/accounts`,
      account
    );
  }

  updateAccount(id: number, account: Account) {
    return this.httpClient.put<Account>(`${this.apiUrl}/${id}`, account);
  }

  deleteAccount(id: number): Observable<any> {
    return this.httpClient.delete<Account>(`${this.apiUrl}/${id}`);
  }
}
