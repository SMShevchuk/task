import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangingComponent } from './changing/changing.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  { path: 'changing', component: ChangingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
