import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup;
  submitted = false;
  success = false;
  customer: Object;
  postObject: string = '';

  constructor(private formBuilder: FormBuilder, private data: DataService) { 
    this.customerForm = this.formBuilder.group({
      customer_id: ['', Validators.required],
      customer_name: ['', Validators.required],
	  customer_loc: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.customerForm.invalid) {
      return;
    }

	/** create customer object */
    var cust_id = this.customerForm.value.customer_id;
	var cust_name = this.customerForm.value.customer_name;
	var cust_loc = this.customerForm.value.customer_loc;
	this.postObject = '{"topic": "arn:aws:sns:us-west-2:473950938629:angular7Customer", ' + 
	'"subject": "Add customer from angular 7", ' +
    '"message": "{\"customer_id\": \"' + cust_id + '\", \"customer_name\": \"' + cust_name + '\", \"customer_location\": \"' + cust_loc + '\"}"}';
	
	this.data.addCustomerSNS(this.postObject).subscribe(
       success => alert("Done"),
       error => alert(error)
     );
	
    this.success = true;
  }

  ngOnInit() {
  }

}



