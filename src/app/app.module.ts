import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRingsComponent } from './components/rings/list-rings/list-rings.component';
import { CreateRingsComponent } from './components/rings/create-rings/create-rings.component';
import { CreateEarringsComponent } from './components/earring/create-earrings/create-earrings.component';
import { ListEarringsComponent } from './components/earring/list-earrings/list-earrings.component';





@NgModule({
  declarations: [
    AppComponent,
    ListRingsComponent,
    CreateRingsComponent,
    CreateEarringsComponent,
    ListEarringsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
