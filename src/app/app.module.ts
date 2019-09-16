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
import { MatFormFieldModule, MatAutocompleteModule, MatOptionModule, MatInputModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    TeachersComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatInputModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
