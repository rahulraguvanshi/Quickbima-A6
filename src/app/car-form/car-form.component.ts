import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as $ from 'jquery';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  // Min moment: April 12 2018, 10:30
  public min = new Date(2018, 3, 12, 10, 30);
  // Max moment: April 25 2018, 20:30
  public max = new Date(2018, 3, 25, 20, 30);

  constructor(private carFormBuilder: FormBuilder) {
  }

  public carMakeModel:Array<string> = [
    'Maruti Suzuki 800', 
    'Maruti Suzuki Alto', 
    'Maruti Suzuki Alto 800', 
    'Maruti Suzuki Alto K10', 
    'Maruti Suzuki Swift',
    'Maruti Suzuki Swift Dzire'
  ];

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
      age: ['', Validators.required],
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
