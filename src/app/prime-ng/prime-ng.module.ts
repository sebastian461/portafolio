import { NgModule } from '@angular/core';

import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  exports: [DividerModule, FieldsetModule, PanelModule, ProgressBarModule],
})
export class PrimeNgModule {}
