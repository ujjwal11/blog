import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';





@NgModule({
  imports: [
    MatButtonModule, 
    MatToolbarModule, 
    MatExpansionModule, 
    MatInputModule, 
    MatProgressBarModule, 
    MatCardModule, 
    MatIconModule, 
    MatTooltipModule, 
    MatGridListModule
  ],
  exports: [
    MatButtonModule, 
    MatToolbarModule, 
    MatExpansionModule, 
    MatInputModule, 
    MatProgressBarModule, 
    MatCardModule, 
    MatIconModule, 
    MatTooltipModule, 
    MatGridListModule
  ]
})
export class MaterialModule { }
