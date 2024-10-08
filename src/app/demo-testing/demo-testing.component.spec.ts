import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTestingComponent } from './demo-testing.component';

describe('DemoTestingComponent', () => {
  let component: DemoTestingComponent;
  let fixture: ComponentFixture<DemoTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoTestingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
