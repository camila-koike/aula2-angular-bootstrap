import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'/index', pathMatch: 'full'},
  {
    path: 'index',
    loadChildren: () => 
    import('./index-module/index-module.module').
    then(m => m.IndexModuleModule)
  },
  {
    path: 'user',
    loadChildren: () => 
    import('./user-module/user-module.module').
    then(m => m.UserModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
