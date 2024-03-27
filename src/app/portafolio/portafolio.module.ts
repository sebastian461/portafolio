import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';

@NgModule({
  declarations: [PaginaPrincipalComponent, AboutComponent, ExperienceComponent],
  imports: [CommonModule, PortafolioRoutingModule, PrimeNgModule],
})
export class PortafolioModule {}
