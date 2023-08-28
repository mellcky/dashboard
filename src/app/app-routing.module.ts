import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './header/general/general.component';
import { LaboratoryComponent } from './header/laboratory/laboratory.component';
import { StockComponent } from './header/stock/stock.component';

const routes: Routes = [
  { path: '', redirectTo: 'general', pathMatch: 'full' },
  { path: 'general', component: GeneralComponent },
  { path: 'laboratory', component: LaboratoryComponent },
  { path: 'stock', component: StockComponent },
  { path: '**', redirectTo: 'general' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
