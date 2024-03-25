import { NgModule } from '@angular/core';

import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';

@NgModule({
  exports: [PanelModule, FieldsetModule, DividerModule],
})
export class PrimeNgModule {}
