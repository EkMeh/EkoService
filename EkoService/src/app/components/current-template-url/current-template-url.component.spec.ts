import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTemplateUrlComponent } from './current-template-url.component';

describe('CurrentTemplateUrlComponent', () => {
  let component: CurrentTemplateUrlComponent;
  let fixture: ComponentFixture<CurrentTemplateUrlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentTemplateUrlComponent]
    });
    fixture = TestBed.createComponent(CurrentTemplateUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
