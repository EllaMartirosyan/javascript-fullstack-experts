import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PizzaService } from './shared/services/pizza.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PizzaListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PizzaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
