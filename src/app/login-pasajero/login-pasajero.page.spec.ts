import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPasajeroPage } from './login-pasajero.page';

describe('LoginPasajeroPage', () => {
  let component: LoginPasajeroPage;
  let fixture: ComponentFixture<LoginPasajeroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginPasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
