import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserComponent } from './user/user.component';
import { UserFilhoComponent } from './user-filho/user-filho.component';


@NgModule({
  declarations: [
    UserComponent,
    UserFilhoComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule
  ]
})
export class UserModuleModule { }
