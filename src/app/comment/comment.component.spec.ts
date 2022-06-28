import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SafePipe } from '../safe.pipe';

import { CommentComponent } from './comment.component';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentComponent, SafePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.commentDate = '2022-05-24T02:00:03Z';
    component.content = 'some content';
    component.reactions = {
      url: '',
      total_count: 0,
      "+1": 1,
      "-1": 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    }
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
