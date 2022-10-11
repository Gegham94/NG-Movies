import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonesComponent } from './persones.component';

describe('PeoplesComponent', () => {
  let component: PersonesComponent;
  let fixture: ComponentFixture<PersonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
