import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';

@NgModule({
  declarations: [
    PaginaPrincipalComponent
  ],
  imports: [CommonModule, PortafolioRoutingModule],
})
export class PortafolioModule {}
