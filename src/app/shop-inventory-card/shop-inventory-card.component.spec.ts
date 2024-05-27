import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopInventoryCardComponent } from './shop-inventory-card.component';

describe('ShopInventoryCardComponent', () => {
  let component: ShopInventoryCardComponent;
  let fixture: ComponentFixture<ShopInventoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopInventoryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopInventoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
