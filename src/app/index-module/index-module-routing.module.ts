
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'cabecalho', component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexModuleRoutingModule { }
