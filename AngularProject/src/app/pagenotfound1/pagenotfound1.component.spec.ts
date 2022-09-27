import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagenotfound1Component } from './pagenotfound1.component';

describe('Pagenotfound1Component', () => {
  let component: Pagenotfound1Component;
  let fixture: ComponentFixture<Pagenotfound1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagenotfound1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagenotfound1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
