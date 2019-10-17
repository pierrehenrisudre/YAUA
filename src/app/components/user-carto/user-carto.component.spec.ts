import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCartoComponent } from './user-carto.component';

describe('UserDetailsComponent', () => {
  let component: UserCartoComponent;
  let fixture: ComponentFixture<UserCartoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCartoComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
