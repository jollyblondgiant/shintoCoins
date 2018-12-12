import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { MineComponent } from './mine/mine.component';
import { BrowseComponent } from './browse/browse.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { ShintoService } from './shinto.service'
import { FormsModule }  from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { DeetsComponent } from './deets/deets.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyComponent,
    SellComponent,
    MineComponent,
    BrowseComponent,
    PagenotfoundComponent,
    WelcomeComponent,
    DeetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [ShintoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
