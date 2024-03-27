import { Component } from '@angular/core';
import { Skill } from '../../interfaces/data.interface';

@Component({
  selector: 'portafolio-skills',
  templateUrl: './skills.component.html',
  styles: ``,
})
export class SkillsComponent {
  public skills: Skill[] = [
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
  ];
}
