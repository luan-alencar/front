import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.scss']
})
export class EventListComponent implements OnInit {
  public eventos = [
    { id: 1, name: 'Workshop Angular', date: '2024-10-01', location: 'Online' },
    { id: 2, name: 'Seminário de Ionic', date: '2024-10-15', location: 'São Paulo' },
    { id: 3, name: 'Conferência sobre DevOps', date: '2024-11-05', location: 'Rio de Janeiro' },
    { id: 4, name: 'Palestra sobre Java', date: '2024-12-12', location: 'Online' },
    { id: 5, name: 'Campeonato Paraibano de Jiu-Jitsu', date: '2024-12-12', location: 'Quadra Facisa' }
  ];

  constructor() {}

  ngOnInit() {}

  registerEvent(eventId: number) {
    console.log(`Inscrito no evento com ID: ${eventId}`);
    // TODO - adicionar lógica de inscrição, como chamada a um serviço.
  }
  
}
