import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignButtonComponent } from './design-button.component';

describe('DesignButtonComponent', () => {
  let component: DesignButtonComponent;
  let fixture: ComponentFixture<DesignButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
