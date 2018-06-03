import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisboardComponent } from './disboard.component';

describe('DisboardComponent', () => {
  let component: DisboardComponent;
  let fixture: ComponentFixture<DisboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
