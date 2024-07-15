import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Deposit } from '../../shared/models/deposit';

@Injectable({
  providedIn: 'root',
})
export class DepositService {
  private apiUrl = `http://localhost:8080/accounts`;
  constructor(private httpClient: HttpClient) {}

  getDeposits(): Observable<Deposit[]> {
    return this.httpClient.get<any>(`${this.apiUrl}/0/deposits`).pipe(
      map((response) =>
        response.data.map((deposit: any) => ({
          id: deposit.id,
          transaction_date: deposit.transaction_date,
          amount: deposit.amount,
          description: deposit.description,
        }))
      )
    );
  }

  createDeposit(id: number, deposit: Deposit): Observable<Deposit> {
    return this.httpClient.post<any>(`${this.apiUrl}/${id}/deposits`, deposit);
  }
}
