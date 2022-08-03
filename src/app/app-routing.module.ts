import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { LoginComponent } from './login/login/login.component';


const routes: Routes = [
    {path:'' , component:LoginComponent},
    {path:'home', component:HomepageComponent},
    {path:'details', component:DetailsMovieComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }