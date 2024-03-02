import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/register',
    pathMatch:'full'
  },
  {
    component:RegisterComponent,
    path:'register',
  },
  {
    component:RegisterComponent,
    path:'register/:id',
  },
  {
    component:ListComponent,
    path:'list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
