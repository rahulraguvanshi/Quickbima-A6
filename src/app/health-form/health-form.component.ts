import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-health-form',
  templateUrl: './health-form.component.html',
  styleUrls: ['./health-form.component.scss']
})
export class HealthFormComponent implements OnInit {

  healthAge = [];
  constructor() {
    this.getEldestAge();
  }
  private getEldestAge() {
    this.healthAge = Array.from({length: 83}, (value, key) => key).map(i => i + 18 + ' Years');
  }
  eldestGender = ["Male", "Female"];

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

  public ngOnInit() {

    $(".input-effect input").focusout(function(){
      if($(this).val() != ""){
          $(this).addClass("has-content");
      }else {
          $(this).removeClass("has-content");
      }
    });
  }

}
