import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SafePipe } from '../safe.pipe';

import { NewReactionComponent } from './new-reaction.component';

describe('NewReactionComponent', () => {
  let component: NewReactionComponent;
  let fixture: ComponentFixture<NewReactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReactionComponent, SafePipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
