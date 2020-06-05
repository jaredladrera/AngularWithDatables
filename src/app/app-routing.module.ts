import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { SecondTableComponent } from './second-table/second-table.component'
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: SecondTableComponent },
  { path: 'first', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
