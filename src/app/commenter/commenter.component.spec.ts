import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { GithubV3Service } from '../github-v3.service';
import { CommenterComponent } from './commenter.component';

let githubV3ServiceStub: Partial<GithubV3Service>;

githubV3ServiceStub = {
  getComments: () => new Observable(),
}

describe('CommenterComponent', () => {
  let component: CommenterComponent;
  let fixture: ComponentFixture<CommenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommenterComponent ],
      providers: [
        { provide: GithubV3Service, useValue: githubV3ServiceStub }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
