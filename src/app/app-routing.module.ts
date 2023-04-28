import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayPersonComponent } from './display-person/display-person.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'DisplayPersonComponent', component: DisplayPersonComponent },
  { path: 'AppComponent', component: AppComponent },
  { path: 'AddPersonComponent', component: AddPersonComponent },
  { path: 'DeletePersonComponent', component: DeletePersonComponent },
  { path: 'EditPersonComponent', component: EditPersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
