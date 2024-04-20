import { Component, Signal, computed, inject } from '@angular/core';
import { Education } from '../../interfaces/data.interface';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'portafolio-education',
  templateUrl: './education.component.html',
  styles: ``,
})
export class EducationComponent {
  private dataService = inject(DataService);

  public education: Signal<Education[]> = computed(
    () => this.dataService.data().education
  );
}
