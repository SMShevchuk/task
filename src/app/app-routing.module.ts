import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangingComponent } from './changing/changing.component';
import { HomeComponent } from './home/home.component';
import { LookComponent } from './look/look.component';
import { NewOwnerComponent } from './new-owner/new-owner.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  
  { path: 'look', component: LookComponent },

  { path: 'changing', component: ChangingComponent },

  { path: 'newowner', component: NewOwnerComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
