import { Component, Signal, computed, inject } from '@angular/core';
import { Skill } from '../../interfaces/data.interface';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'portafolio-skills',
  templateUrl: './skills.component.html',
  styles: ``,
})
export class SkillsComponent {
  private dataService = inject(DataService);
  public skills: Signal<Skill[]> = computed(
    () => this.dataService.data().skills
  );
}
