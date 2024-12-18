import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDashwordComponent } from './buyer-dashword.component';

describe('BuyerDashwordComponent', () => {
  let component: BuyerDashwordComponent;
  let fixture: ComponentFixture<BuyerDashwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerDashwordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerDashwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
