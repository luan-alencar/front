import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Certifique-se de que o IonicModule está importado
import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { EventoModule } from '../../components/evento-list/evento.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
