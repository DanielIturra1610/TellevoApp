import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostrarPostsPage } from './mostrar-posts.page';

describe('MostrarPostsPage', () => {
  let component: MostrarPostsPage;
  let fixture: ComponentFixture<MostrarPostsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MostrarPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
