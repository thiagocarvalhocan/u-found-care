import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheAppComponent } from './the-app.component';

describe('TheAppComponent', () => {
  let component: TheAppComponent;
  let fixture: ComponentFixture<TheAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
