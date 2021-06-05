import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { StorageService } from './services/storage.service';
import { Register1Component } from './components/register1/register1.component';
import { Register2Component } from './components/register2/register2.component';
import { AreaComponent } from './components/area/area.component';
import { ColorComponent } from './components/color/color.component';
import { Grade1Component } from './components/grade1/grade1.component';
import { InformationComponent } from './components/information/information.component';
import { Temperature1Component } from './components/temperature1/temperature1.component';
import { TableComponent} from './components/table/table.component'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    Register1Component,
    Register2Component,
    AreaComponent,
    ColorComponent,
    Grade1Component,
    InformationComponent,
    Temperature1Component,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
