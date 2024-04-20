import { Component, Signal, computed, inject } from '@angular/core';
import { Experience } from '../../interfaces/data.interface';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'portafolio-experience',
  templateUrl: './experience.component.html',
  styles: ``,
})
export class ExperienceComponent {
  private dataService = inject(DataService);

  public experience: Signal<Experience[]> = computed(
    () => this.dataService.data().experience
  );
}
