import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSuccursaleComponent } from './details-succursale.component';

describe('DetailsSuccursaleComponent', () => {
  let component: DetailsSuccursaleComponent;
  let fixture: ComponentFixture<DetailsSuccursaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSuccursaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsSuccursaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
