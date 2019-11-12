import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './pages/dash/dash.component';
import { TodoComponent } from './pages/todo/todo.component';
import { LoginComponent } from './pages/login/login.component';
import { JournalComponent } from './pages/journal/journal.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:LoginComponent
  },
  {
    path:'dash',
    component:DashComponent
  },
  {
    path:'todo',
    component:TodoComponent
  },
  {
    path:'journal',
    component:JournalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const components=[
  DashComponent,
  TodoComponent,
  LoginComponent,
  JournalComponent
]
