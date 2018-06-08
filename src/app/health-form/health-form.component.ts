import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-health-form',
  templateUrl: './health-form.component.html',
  styleUrls: ['./health-form.component.scss']
})
export class HealthFormComponent implements OnInit {

  constructor() {
  }

  // Eldest member's Age Dropdown.
  eldestMembarAge(n: number, startFrom: number): number[] {
    return Array.from(Array(n).keys()).map(i => i + startFrom);
  }
  // Eldest member's Gender.
  public eldestMemberGender = [ 
    "Male",
    "Female"
  ];

  public ngOnInit() {
    $(function() {
      $('.ui.dropdown').dropdown();
    });

    $(".input-effect input").focusout(function(){
      if($(this).val() != ""){
          $(this).addClass("has-content");
      }else {
          $(this).removeClass("has-content");
      }
    });
  }

}
