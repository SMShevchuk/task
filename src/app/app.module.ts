import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChangingComponent } from './changing/changing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnersService } from './owners.service';
import { NewOwnerComponent } from './new-owner/new-owner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChangingComponent,
    NewOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OwnersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
