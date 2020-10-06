import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagesComponent } from './personages.component';

describe('PersonagesComponent', () => {
  let component: PersonagesComponent;
  let fixture: ComponentFixture<PersonagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
