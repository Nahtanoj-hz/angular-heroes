import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesService } from './shared/services/heroes.service';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatChipsModule,
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
