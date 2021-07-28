import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEarringsComponent } from './components/earring/create-earrings/create-earrings.component';
import { ListEarringsComponent } from './components/earring/list-earrings/list-earrings.component';
import { CreateRingsComponent } from './components/rings/create-rings/create-rings.component';
import { ListRingsComponent } from './components/rings/list-rings/list-rings.component';

const routes: Routes = [
  { path: 'createEarrings', component: CreateEarringsComponent },
  { path: 'listEarrings', component: ListEarringsComponent },
  { path: 'createRings', component: CreateRingsComponent },
  { path: 'listRings', component: ListRingsComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
