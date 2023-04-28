import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule , FormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {SelectionModel } from '@angular/cdk/collections'; 

import { AppComponent } from './app.component';
import { DisplayPersonComponent } from './display-person/display-person.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeletePersonComponent } from './delete-person/delete-person.component';
import { EditPersonComponent } from './edit-person/edit-person.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayPersonComponent,
    AddPersonComponent,
    DeletePersonComponent,
    EditPersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatCheckboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
