import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userr2Component } from './userr2.component';

describe('Userr2Component', () => {
  let component: Userr2Component;
  let fixture: ComponentFixture<Userr2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userr2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
