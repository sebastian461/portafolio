import { Component } from '@angular/core';
import { Education } from '../../interfaces/data.interface';

@Component({
  selector: 'portafolio-education',
  templateUrl: './education.component.html',
  styles: ``,
})
export class EducationComponent {
  public education: Education[] = [
    {
      institute: 'Universidad UTE',
      date: '2019 - 2023',
      description: 'Ingeniería en Ciencias de la Computación',
    },
    {
      institute: "Academia Aeronáutica 'MayorPedro Traversari'",
      date: '2016',
      description: 'Bachiller en Ciencias',
    },
  ];
}
