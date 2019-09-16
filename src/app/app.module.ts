import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MovieService } from './service/movie.service';
import { TeachersComponent } from './teachers/teachers.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MatFormFieldModule, MatAutocompleteModule, MatOptionModule, MatInputModule, 
        MatCheckboxModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatapickerComponent } from './datapicker/datapicker.component';
import { FormfieldComponent } from './formfield/formfield.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    TeachersComponent,
    AutocompleteComponent,
    CheckboxComponent,
    DatapickerComponent,
    FormfieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
