import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PoModule, PoWidgetModule } from '@po-ui/ng-components';
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { TasksComponent } from "./tasks/tasks.component";
import { LoginComponent } from "./login/login.component";
import { HistoryComponent } from "./history/history.component";
import { CategoriesComponent } from "./categories/categories.component";

@NgModule({
    declarations: [
        LoginComponent,
        TasksComponent,
        HistoryComponent,
        CategoriesComponent
    ],
    imports: [
        CommonModule,
        PoModule,
        PoPageLoginModule,
        PoWidgetModule
    ],
    exports: [
        LoginComponent,
        TasksComponent,
        HistoryComponent,
        CategoriesComponent
    ]
})

export class FeaturesModule { }