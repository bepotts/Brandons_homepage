/**
 * File tests the SectionBody component.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBodyComponent } from '../../app/section-body/section-body.component';

describe('SectionBodyComponent', () => {
  let component: SectionBodyComponent;
  let fixture: ComponentFixture<SectionBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
