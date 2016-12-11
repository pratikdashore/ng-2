import { Component, Input } from '@angular/core';

import { Customer } from './customer';

@Component({
  moduleId: module.id,
  selector: 'my-customer-detail',
  templateUrl: 'customer-detail.component.html'
})
export class CustomerDetailComponent {
  message: string;
  @Input() customer: Customer; // = this.customers[0];

  showMessage() {
    this.message = `The customer name is ${this.customer.name}`;
  }
}
