import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMoreSectionComponent } from './hero-more-section.component';

describe('HeroMoreSectionComponent', () => {
  let component: HeroMoreSectionComponent;
  let fixture: ComponentFixture<HeroMoreSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroMoreSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroMoreSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
