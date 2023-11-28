import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetarPageRoutingModule } from './metar-routing.module';

import { MetarPage } from './metar.page';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputMetarComponent } from './components/main/components/input-metar/input-metar.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetarPageRoutingModule
  ],
  declarations: [MetarPage, HeaderComponent, FooterComponent, MainComponent, InputMetarComponent]
})
export class MetarPageModule {}
