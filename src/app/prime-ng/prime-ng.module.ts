import { NgModule } from '@angular/core';

import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  exports: [PanelModule, FieldsetModule],
})
export class PrimeNgModule {}
