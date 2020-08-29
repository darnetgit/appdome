import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazingCharComponent } from './amazing-char.component';

describe('AmazingCharComponent', () => {
  let component: AmazingCharComponent;
  let fixture: ComponentFixture<AmazingCharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazingCharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazingCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
