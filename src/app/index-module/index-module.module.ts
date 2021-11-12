import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexModuleRoutingModule } from './index-module-routing.module';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    HeaderComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexModuleRoutingModule
  ]
})
export class IndexModuleModule { }
