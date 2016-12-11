import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Customer } from './customer';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {
  constructor(private http: Http) { }

  getCustomers() {
    return this.http.get('app/customers.json')
      .map((response: Response) => <Customer[]>response.json().data);
    // return [
    //   new Customer(1, 'John', 'Florida'),
    //   new Customer(2, 'Ward', 'South Pole'),
    //   new Customer(3, 'Jesse', 'Disney'),
    // ];
  }
}
