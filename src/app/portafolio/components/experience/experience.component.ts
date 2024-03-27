import { Component } from '@angular/core';
import { Experience } from '../../interfaces/data.interface';

@Component({
  selector: 'portafolio-experience',
  templateUrl: './experience.component.html',
  styles: ``,
})
export class ExperienceComponent {
  public experience: Experience[] = [
    {
      position: 'Asistente en Sistemas',
      company: 'ITSEP, Noviembre 2022 - Abril 2023',
      description: [
        'Desarrollo del sistema informático de Autoevaluación institucional.',
      ],
    },
    {
      position: 'Pasante IT',
      company: 'Empresa CNPC, Abr 2022 - Oct 2022',
      description: [
        'Asistencia técnica.',
        'Mantenimiento y reparación de equipos.',
        'Inventariado.',
        'Mantenimiento de servidores.',
      ],
    },
  ];
}
