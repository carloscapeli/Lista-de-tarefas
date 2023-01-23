import { NgModule } from "@angular/core";
import { PoPageLoginModule } from "@po-ui/ng-templates";
import { LoginComponent } from "./login.component";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        PoPageLoginModule
    ],
    exports: [
        LoginComponent
    ]
})

export class LoginModule { }