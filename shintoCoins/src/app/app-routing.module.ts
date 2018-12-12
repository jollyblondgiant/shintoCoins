import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { BuyComponent } from './buy/buy.component'
import { BrowseComponent } from './browse/browse.component'
import { MineComponent } from './mine/mine.component'
import { SellComponent } from './sell/sell.component'


const routes: Routes = [

  { path: 'buy', component: BuyComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'mine', component: MineComponent },
  { path: 'sell', component: SellComponent },
 
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
