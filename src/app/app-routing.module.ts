import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TeachersComponent} from './teachers/teachers.component';
import { AutocompleteComponent} from './autocomplete/autocomplete.component';
import { CheckboxComponent} from './checkbox/checkbox.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'movie-list', component: MovieListComponent},
  {path: 'Auto-complete', component: AutocompleteComponent},
  {path: 'Checkbox', component: CheckboxComponent},
  {path: 'teachers', component: TeachersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
