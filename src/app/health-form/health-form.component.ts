import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-form',
  templateUrl: './health-form.component.html',
  styleUrls: ['./health-form.component.scss']
})
export class HealthFormComponent implements OnInit {

  constructor() {
  }

  // Eldest member's Age Dropdown.
  arrayOne(n: number, startFrom: number): number[] {
    return Array.from(Array(n).keys()).map(i => i + startFrom);
  }
  // Eldest member's Gender.
  public eldestMemberGender = [ 
    "Male",
    "Female"
  ];

  ngOnInit() {
  }

}
