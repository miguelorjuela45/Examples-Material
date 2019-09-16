import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TeachersComponent} from './teachers/teachers.component';
import { AutocompleteComponent} from './autocomplete/autocomplete.component';
import { CheckboxComponent} from './checkbox/checkbox.component';
import { DatapickerComponent } from './datapicker/datapicker.component';
import { FormfieldComponent } from './formfield/formfield.component';
import { InputComponent } from './input/input.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { SelectComponent } from './select/select.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'movie-list', component: MovieListComponent},
  {path: 'Auto-complete', component: AutocompleteComponent},
  {path: 'Checkbox', component: CheckboxComponent},
  {path: 'Datepicker', component: DatapickerComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: 'Input', component: InputComponent},
  {path: 'Radio-button', component: RadiobuttonComponent},
  {path: 'Select', component: SelectComponent},
  {path: 'Form-field', component: FormfieldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
