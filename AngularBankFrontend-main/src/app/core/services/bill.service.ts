import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Bill } from '../../shared/models/bill';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  private apiUrl = 'http://localhost:8080/bills';
  constructor(private httpClient: HttpClient) {}

  getBills(): Observable<Bill[]> {
    return this.httpClient.get<any>(`${this.apiUrl}`).pipe(
      map((response) =>
        response.body.data.map((bill: any) => ({
          id: bill.id,
          status: bill.status,
          payee: bill.payee,
          nickname: bill.nickname,
          creation_date: bill.creation_date,
          payment_date: bill.payment_date,
          recurring_date: bill.recurring_date,
          payment_amount: bill.payment_amount,
        }))
      )
    );
  }

  createBill(bill: Bill): Observable<Bill> {
    return this.httpClient.post<any>(`${this.apiUrl}`, bill);
  }
}
