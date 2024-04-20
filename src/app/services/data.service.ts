import { Injectable, signal } from '@angular/core';
import { Data } from '../portafolio/interfaces/data.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public data = signal<Data>({
    info: {
      name: 'Sebastián Álava',
      description:
        'Soy ingeniero en Ciencias de la Computación con experiencia en desarrollo full stack junior. Aunque actualmente estoy buscando oportunidades laborales, mi interés y habilidad en el desarrollo web me mantienen en constante aprendizaje y crecimiento profesional. Me apasiona explorar nuevas tecnologías y tengo un compromiso firme con el aprendizaje autónomo, lo que me permite adaptarme y evolucionar en el dinámico campo de la informática.',
    },
    experience: [
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
    ],
    education: [
      {
        institute: 'Universidad UTE',
        date: '2019 - 2023',
        description: 'Ingeniería en Ciencias de la Computación',
      },
      {
        institute: "Academia Aeronáutica 'Mayor Pedro Traversari'",
        date: '2016',
        description: 'Bachiller en Ciencias',
      },
    ],
    courses: [
      {
        title: 'Angular: De cero a experto',
        instructor: 'Fernando Herrera',
        plataform: 'Udemy',
        date: '04-2024',
        url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-d2d0fb4a-1220-433a-a9d7-95d7f2419353.pdf',
      },
      {
        title: 'Aprende Programación Backend en C#.NET',
        instructor: 'Héctor de León',
        plataform: 'Udemy',
        date: '02-2024',
        url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-b7957a47-9370-4819-a415-71e511a0cf65.pdf',
      },
      {
        title: 'React: De cero a experto (Hooks y MERN)',
        instructor: 'Fernando Herrera',
        plataform: 'Udemy',
        date: '02-2024',
        url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-7f0f1263-6601-42da-bb20-3b2f91952e28.pdf',
      },
      {
        title: 'JavaScript Moderno: Guía para dominar ellenguaje',
        instructor: 'Fernando Herrera',
        plataform: 'Udemy',
        date: '11-2023',
        url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-34265ed1-d2b1-498c-9391-5a9d2f5d005b.pdf',
      },
    ],
    skills: [
      {
        skill: 'Angular',
        percent: 50,
        img: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png',
      },
      {
        skill: 'React',
        percent: 50,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1024px-React.svg.png',
      },
      {
        skill: 'Laravel',
        percent: 25,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png',
      },
      {
        skill: '.NET',
        percent: 25,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1024px-Microsoft_.NET_logo.svg.png',
      },
    ],
  });
  constructor() {}
}
