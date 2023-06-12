import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ProdottoService } from './prodotti/prodotto.service';

import { AppComponent } from './app.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ErrorComponent } from './component/error/error.component';
import { HomeComponent } from './component/home/home.component';
import { ProductCreateComponent } from './component/product-create/product-create.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { AppRoutingModule } from './app-routing.module';

//const routes: Routes = [
  //{ path: 'users', component: ProdottiComponent },
//];

@NgModule({
  declarations: [
    AppComponent,
    ProdottiComponent,
    ErrorComponent,
    HomeComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //RouterModule.forRoot(Routes)
  ],
 // exports: [ RouterModule ],
  providers: [ProdottoService],
  bootstrap: [ProdottiComponent]
})
export class AppModule { }
