import { NgModule } from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRippleModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    exports: [
        LayoutModule,
        MatSnackBarModule,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
    ]
})
export class AngularMaterialConfig{}
