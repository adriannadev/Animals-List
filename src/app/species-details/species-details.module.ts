import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { SpeciesDetailsComponent } from './species-details.component';
import { SpeciesDetailsRoutingModule } from './species-details-routing.module';

@NgModule({
    imports: [ CommonModule, FormsModule, SharedModule, SpeciesDetailsRoutingModule ],
    declarations: [ SpeciesDetailsComponent ]
})
export class SpeciesDetailsModule { }