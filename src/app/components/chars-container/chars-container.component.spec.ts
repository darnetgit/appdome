import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharsContainerComponent } from './chars-container.component';

describe('CharsContainerComponent', () => {
  let component: CharsContainerComponent;
  let fixture: ComponentFixture<CharsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
