import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './component/error/error.component';
import { HomeComponent } from './component/home/home.component';
import { ProductCreateComponent } from './component/product-create/product-create.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductListComponent } from './component/product-list/product-list.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'product-create', component: ProductCreateComponent },
    { path: 'product-edit/:id', component: ProductEditComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }