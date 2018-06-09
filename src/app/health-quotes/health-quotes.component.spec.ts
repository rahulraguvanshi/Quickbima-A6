import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthQuotesComponent } from './health-quotes.component';

describe('HealthQuotesComponent', () => {
  let component: HealthQuotesComponent;
  let fixture: ComponentFixture<HealthQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
