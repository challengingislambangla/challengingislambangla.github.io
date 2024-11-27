import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './data/data.component';

export const routes: Routes = [
    { path: 'data/:dataType', component: DataComponent },
    { path: '', redirectTo: '', pathMatch: 'full' }
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }