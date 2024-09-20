import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Eventos', url: '/eventos', icon: 'calendar' },
    { title: 'Usuários', url: '/usuarios', icon: 'people' },
    { title: 'Relatórios', url: '/relatorios', icon: 'stats-chart' }
  ];

  public labels = ['Conferências', 'Workshops', 'Seminários', 'Palestras'];
}
