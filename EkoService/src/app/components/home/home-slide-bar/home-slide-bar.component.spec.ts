import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlideBarComponent } from './home-slide-bar.component';

describe('HomeSlideBarComponent', () => {
  let component: HomeSlideBarComponent;
  let fixture: ComponentFixture<HomeSlideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSlideBarComponent]
    });
    fixture = TestBed.createComponent(HomeSlideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
