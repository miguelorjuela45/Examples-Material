import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TeachersComponent} from './teachers/teachers.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'movie-list', component: MovieListComponent},
  {path: 'teachers', component: TeachersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
