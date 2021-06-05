import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { TableComponent} from './components/table/table.component'
import { AreaComponent } from './components/area/area.component';
import { ColorComponent } from './components/color/color.component';
import { Grade1Component } from './components/grade1/grade1.component';
import { InformationComponent } from './components/information/information.component';
import { Temperature1Component } from './components/temperature1/temperature1.component';
const routes: Routes = [
  { path: 'temperature1', component: Temperature1Component },
  { path: 'color', component: ColorComponent },
  { path: 'grade1', component: Grade1Component },
  { path: 'area', component: AreaComponent },
  { path: 'information', component: InformationComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
