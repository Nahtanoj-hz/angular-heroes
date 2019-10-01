import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips'; 
import { MatIconModule } from '@angular/material/icon';

import { HeroDetailsComponent } from './hero-details/hero-details.component';

const routes: Routes = [
  {
    path: '',
    component: HeroDetailsComponent
  }
];

@NgModule({
  declarations: [HeroDetailsComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class HeroDetailsModule { }
