import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule , FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login/login.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { RowMovieComponent } from './row-movie/row-movie.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    HeaderComponent,
    RowMovieComponent,
    ThumbnailComponent,
    DetailsMovieComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
