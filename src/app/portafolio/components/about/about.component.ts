import { Component, OnInit, Signal, computed, inject } from '@angular/core';
import { Info } from '../../interfaces/data.interface';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'portafolio-about',
  templateUrl: './about.component.html',
  styles: ``,
})
export class AboutComponent {
  private dataService = inject(DataService);

  public info: Signal<Info> = computed(() => this.dataService.data().info);
}
