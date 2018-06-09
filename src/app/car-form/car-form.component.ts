import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as $ from 'jquery';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  constructor(private carFormBuilder: FormBuilder) {
  }

  carMakeModel = [
    "Maruti Suzuki 800",
    "Maruti Suzuki Alto",
    "Maruti Suzuki Alto 800",
    "Maruti Suzuki Alto K10",
    "Maruti Suzuki Alto Swift",
    "Maruti Suzuki Alto Swift Dzire"
  ]

  fuelType = [
    "Petrol", 
    "Diesel"
  ];

  carVariant = []
  
  carForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.carForm = this.carFormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pincode: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      age: ['', Validators.required]
  });

    $(".input-effect input").focusout(function(){
      if($(this).val() != ""){
          $(this).addClass("has-content");
      }else {
          $(this).removeClass("has-content");
      }
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.carForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.carForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.carForm.value))
  }


}
