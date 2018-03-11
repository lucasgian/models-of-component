//import { NgModule } from "@angular/core/src/metadata/ng_module";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { TaskComponent } from './task/task.component';

@NgModule({
    imports: [RouterModule.forRoot(
        [
            { path: 'login', component: LoginComponent },
            //{ path: 'edit/:id', component: TaskEditComponent },
            { path: 'task', component: TaskComponent },
            { path: 'register', component: RegisterComponent }
        ]
    )],
    exports: [RouterModule]
})

export class AppRoutingModule { }