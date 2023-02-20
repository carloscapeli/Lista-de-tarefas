import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoModule, PoToolbarModule, PoMenuModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { HomeComponent } from './home/home.component';
import { FeaturesModule } from '../features/features.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    PoTemplatesModule,
    PoToolbarModule,
    PoMenuModule,
    FeaturesModule
  ],
  exports: [
    HomeComponent
  ]
})
export class CoreModule { }
