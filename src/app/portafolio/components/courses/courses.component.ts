import { Component, Signal, computed, inject } from '@angular/core';
import { Course } from '../../interfaces/data.interface';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'portafolio-courses',
  templateUrl: './courses.component.html',
  styles: ``,
})
export class CoursesComponent {
  private dataService = inject(DataService);
  public courses: Signal<Course[]> = computed(
    () => this.dataService.data().courses
  );
}
