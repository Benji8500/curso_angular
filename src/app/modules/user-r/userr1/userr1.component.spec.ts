import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userr1Component } from './userr1.component';

describe('Userr1Component', () => {
  let component: Userr1Component;
  let fixture: ComponentFixture<Userr1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userr1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
