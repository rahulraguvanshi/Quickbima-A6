import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as $ from 'jquery';

@Component({
  selector: 'app-health-form',
  templateUrl: './health-form.component.html',
  styleUrls: ['./health-form.component.scss']
})
export class HealthFormComponent implements OnInit {

  healthAge = [];
  constructor(private healthformBuilder: FormBuilder) {
    this.getEldestAge();
  }
  private getEldestAge() {
    this.healthAge = Array.from({length: 83}, (value, key) => key).map(i => i + 18 + ' years');
  }
  eldestGender = [
    "Male",
    "Female"
  ];

  healthForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.healthForm = this.healthformBuilder.group({
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
  get f() { return this.healthForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.healthForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.healthForm.value))
  }


}

  /*
  forLoopRahul(elements: number): Array<any> {
    return new Array(elements);
  }
  <select><option *ngFor="let item of forLoopRahul(83); let i=index">{{i+18}} Years</option> </select>
  */
  /*
  eldestMembarAge(n: number, startFrom: number): number[] {
    return Array.from(Array(n).keys()).map(i => i + startFrom);
  }
  <select name="eldestMemberGender"><option *ngFor="let gender of eldestMemberGender" [value]="gender">{{gender}} </option> </select>
  */