import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Customer } from './customer';
import { CUSTOMERS } from './mock-customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return of(CUSTOMERS);
  }
}













