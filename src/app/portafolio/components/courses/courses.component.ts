import { Component } from '@angular/core';
import { Course } from '../../interfaces/data.interface';

@Component({
  selector: 'portafolio-courses',
  templateUrl: './courses.component.html',
  styles: ``,
})
export class CoursesComponent {
  public courses: Course[] = [
    {
      title: 'Aprende Programación Backend en C#.NET',
      instructor: 'Héctor de León',
      plataform: 'Udemy',
      date: '02-2024',
      duration: 6,
    },
    {
      title: 'React: De cero a experto (Hooks y MERN)',
      instructor: 'Fernando Herrera',
      plataform: 'Udemy',
      date: '02-2024',
      duration: 54,
    },
    {
      title: 'JavaScript Moderno: Guía para dominar ellenguaje',
      instructor: 'Fernando Herrera',
      plataform: 'Udemy',
      date: '11-2023',
      duration: 22,
    },
  ];
}
