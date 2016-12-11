import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CustomerComponent } from './customers.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerService } from './customer.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule ],
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailComponent,
  ],
  providers: [ CustomerService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
