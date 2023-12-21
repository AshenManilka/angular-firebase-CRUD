import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {
  customerForm = new FormGroup({
    name : new FormControl('',Validators.required),
    address : new FormControl('',Validators.required),
    salary : new FormControl('',Validators.required),
  });
  constructor(private router:Router, private activatedRoute:ActivatedRoute , private customerService:CustomerService){

  }
  selectedCustomerId:any;
  customer:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(response=>{
      this.selectedCustomerId = response.get('id');

      console.log('selected customer id '+this.selectedCustomerId );
      console.log('selected customer id length:', this.selectedCustomerId.length);
      console.log('selected customer stringfy id:', JSON.stringify(this.selectedCustomerId));


     this.customerService.findCustomer(this.selectedCustomerId.trim() ).subscribe(selectedCustomerData=>{


        this.customer =  selectedCustomerData;

        console.log('selected customer data : '+ selectedCustomerData);
        console.log(this.customer);


        this.customerForm.patchValue({
          name:this.customer.name,
          address:this.customer.address,
          salary:this.customer.salary
        });
      })
    })
  }
  updateCustomer(){
    let customer= {
      name:this.customerForm.get('name')?.value,
      address:this.customerForm.get('address')?.value,
      salary:Number.parseInt(this.customerForm.get('salary')?.value!),
    }
    this.customerService.updateCustomer(this.selectedCustomerId.trim(), customer).then(response=>{
      console.log('customer updated!');
      // this.router.navigate(['/new']); // (['/new',sfas]);
      this.router.navigateByUrl('/new');   // ('/new/afsf')

    }).catch(error=>{
      console.log(error);

    })

  }
}
