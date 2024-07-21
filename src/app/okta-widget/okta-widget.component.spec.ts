import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OktaWidgetComponent } from './okta-widget.component';

describe('OktaWidgetComponent', () => {
  let component: OktaWidgetComponent;
  let fixture: ComponentFixture<OktaWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OktaWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OktaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
