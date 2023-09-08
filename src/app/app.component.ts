import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'home', url: '/home', icon: 'home' },
    { title: 'viajes', url: '/viajes', icon: 'airplane' },
  ];
  public labels = [];
  constructor() {}
}
