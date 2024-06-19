import { Component, Signal, computed, inject } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Certification } from '../../interfaces/data.interface';

@Component({
  selector: 'portafolio-certification',
  templateUrl: './certification.component.html',
  styles: ``,
})
export class CertificationComponent {
  private dataService = inject(DataService);

  public certifications: Signal<Certification[]> = computed(
    () => this.dataService.data().certifications
  );
}
