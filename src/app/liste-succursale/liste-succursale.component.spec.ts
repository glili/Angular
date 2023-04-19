import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSuccursaleComponent } from './liste-succursale.component';

describe('ListeSuccursaleComponent', () => {
  let component: ListeSuccursaleComponent;
  let fixture: ComponentFixture<ListeSuccursaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSuccursaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeSuccursaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
