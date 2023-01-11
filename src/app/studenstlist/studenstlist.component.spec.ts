import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenstlistComponent } from './studenstlist.component';

describe('StudenstlistComponent', () => {
  let component: StudenstlistComponent;
  let fixture: ComponentFixture<StudenstlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenstlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudenstlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
