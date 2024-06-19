import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CertificationComponent } from './components/certification/certification.component';

@NgModule({
  declarations: [
    AboutComponent,
    CoursesComponent,
    EducationComponent,
    ExperienceComponent,
    PaginaPrincipalComponent,
    SkillsComponent,
    CertificationComponent,
  ],
  imports: [CommonModule, PortafolioRoutingModule, PrimeNgModule],
})
export class PortafolioModule {}
