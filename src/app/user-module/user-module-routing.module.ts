import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFilhoComponent } from './user-filho/user-filho.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path:'', component:UserComponent,
    children:[
      {path: 'filho', component:UserFilhoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
