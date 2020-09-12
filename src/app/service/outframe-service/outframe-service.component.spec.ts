import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutframeServiceComponent } from './outframe-service.component';

describe('OutframeServiceComponent', () => {
  let component: OutframeServiceComponent;
  let fixture: ComponentFixture<OutframeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutframeServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutframeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
