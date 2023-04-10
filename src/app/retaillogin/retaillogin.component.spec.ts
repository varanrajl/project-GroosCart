import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailloginComponent } from './retaillogin.component';

describe('RetailloginComponent', () => {
  let component: RetailloginComponent;
  let fixture: ComponentFixture<RetailloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
