import { NgModule } from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRippleModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
    exports: [
        LayoutModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatSnackBarModule
    ]
})
export class AngularMaterialImports {}