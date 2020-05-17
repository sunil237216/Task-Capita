import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './add-task/add-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './shared/searchFilter';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPipe,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    FormsModule,
    MatDialogModule,
     MatInputModule, 
     MatButtonModule,
     MatCardModule,
     BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddTaskComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
