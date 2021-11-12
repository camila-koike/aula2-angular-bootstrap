import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFilhoComponent } from './user-filho.component';

describe('UserFilhoComponent', () => {
  let component: UserFilhoComponent;
  let fixture: ComponentFixture<UserFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFilhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
