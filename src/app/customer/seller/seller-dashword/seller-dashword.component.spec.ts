import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDashwordComponent } from './seller-dashword.component';

describe('SellerDashwordComponent', () => {
  let component: SellerDashwordComponent;
  let fixture: ComponentFixture<SellerDashwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerDashwordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerDashwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
