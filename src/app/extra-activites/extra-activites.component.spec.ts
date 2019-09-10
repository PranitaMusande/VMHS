import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraActivitesComponent } from './extra-activites.component';

describe('ExtraActivitesComponent', () => {
  let component: ExtraActivitesComponent;
  let fixture: ComponentFixture<ExtraActivitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraActivitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
