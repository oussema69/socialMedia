import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCmntComponent } from './single-cmnt.component';

describe('SingleCmntComponent', () => {
  let component: SingleCmntComponent;
  let fixture: ComponentFixture<SingleCmntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCmntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
