import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverystoneComponent } from './deliverystone.component';

describe('DeliverystoneComponent', () => {
  let component: DeliverystoneComponent;
  let fixture: ComponentFixture<DeliverystoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverystoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverystoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
