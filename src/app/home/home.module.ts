import { NgModule } from "@angular/core";

import { HomeComponent } from "./home.component";
import { PoModule } from '@po-ui/ng-components';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        PoModule
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule { }