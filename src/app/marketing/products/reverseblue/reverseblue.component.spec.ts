import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseblueComponent } from './reverseblue.component';

describe('ReverseblueComponent', () => {
  let component: ReverseblueComponent;
  let fixture: ComponentFixture<ReverseblueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReverseblueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseblueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
