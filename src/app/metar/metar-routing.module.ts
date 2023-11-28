import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetarPage } from './metar.page';

const routes: Routes = [
  {
    path: '',
    component: MetarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetarPageRoutingModule {}
