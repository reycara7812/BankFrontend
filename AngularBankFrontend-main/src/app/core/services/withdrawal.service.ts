import { Injectable } from '@angular/core';
import { Withdrawal } from '../../shared/models/withdrawal';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bill } from '../../shared/models/bill';

@Injectable({
  providedIn: 'root',
})
export class WithdrawalService {
  private apiUrl = `http://localhost:8080/accounts`;
  constructor(private httpClient: HttpClient) {}

  getWithdrawals(): Observable<Withdrawal[]> {
    return this.httpClient.get<any>(`${this.apiUrl}/0/withdrawals`).pipe(
      map((response) =>
        response.data.map((withdrawal: Withdrawal) => ({
          id: withdrawal.id,
          transaction_date: withdrawal.transaction_date,
          amount: withdrawal.amount,
          description: withdrawal.description,
        }))
      )
    );
  }

  createWithdrawal(id: number, withdrawal: Withdrawal): Observable<Withdrawal> {
    return this.httpClient.post<any>(
      `${this.apiUrl}/${id}/withdrawals`,
      withdrawal
    );
  }
}
