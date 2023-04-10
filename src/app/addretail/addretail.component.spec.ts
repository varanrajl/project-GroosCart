import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddretailComponent } from './addretail.component';

describe('AddretailComponent', () => {
  let component: AddretailComponent;
  let fixture: ComponentFixture<AddretailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddretailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddretailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
