import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginGeneralPage } from './login-general.page';

describe('LoginGeneralPage', () => {
  let component: LoginGeneralPage;
  let fixture: ComponentFixture<LoginGeneralPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
