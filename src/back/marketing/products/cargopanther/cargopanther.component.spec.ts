import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargopantherComponent } from './cargopanther.component';

describe('CargopantherComponent', () => {
  let component: CargopantherComponent;
  let fixture: ComponentFixture<CargopantherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargopantherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargopantherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
