import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order2',
  templateUrl: './order2.component.html',
  styleUrls: ['./order2.component.css']
})
export class Order2Component implements OnInit {
  orderForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setFormGroupControl();
  }

  setFormGroupControl():void{
    this.orderForm = this.formBuilder.group({
      email: this.formBuilder.control('', 
      [
        Validators.required, 
        Validators.minLength(5)
      ])
    });
  }

  get email() { return this.orderForm.get('email'); }

}
