import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';

import { GithubV3Service } from '../github-v3.service';
import { CommenterComponent } from './commenter.component';
import { LoginService } from '../login.service';

let githubV3ServiceStub: Partial<GithubV3Service>;
let loginServiceStub: Partial<LoginService>;

githubV3ServiceStub = {
  getComments: () => new Observable(),
}

const obs = new BehaviorSubject<string>('');
loginServiceStub = {
  startup: () => {},
  loggedIn: obs,
}

describe('CommenterComponent', () => {
  let component: CommenterComponent;
  let fixture: ComponentFixture<CommenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommenterComponent ],
      providers: [
        { provide: LoginService, useValue: loginServiceStub },
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
