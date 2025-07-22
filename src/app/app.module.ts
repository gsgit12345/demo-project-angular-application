import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplayData }    from './datamodule/datamodule.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SearchComponent } from './productlist/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './productlist/product/product.component';
import { FilterComponent } from './productlist/filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayData,
    ProductlistComponent,
    SearchComponent,
    ProductComponent,
    FilterComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
