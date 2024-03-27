import { Component, OnInit } from '@angular/core';
import { Info } from '../../interfaces/data.interface';

@Component({
  selector: 'portafolio-about',
  templateUrl: './about.component.html',
  styles: ``,
})
export class AboutComponent {
  public info: Info = {
    name: 'Sebastián Álava',
    description:
      'Soy ingeniero en Ciencias de la Computación con experiencia en desarrollo full stack junior. Aunque actualmente estoy buscando oportunidades laborales, mi interés y habilidad en el desarrollo web me mantienen en constante aprendizaje y crecimiento profesional. Me apasiona explorar nuevas tecnologías y tengo un compromiso firme con el aprendizaje autónomo, lo que me permite adaptarme y evolucionar en el dinámico campo de la informática.',
  };
}
