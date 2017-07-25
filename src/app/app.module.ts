import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FootComponent } from './foot/foot.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { StarsComponent } from './stars/stars.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import { StockService } from "app/stock/stock.service";
import { StockFilterPipe } from './stock/stock-filter.pipe';
// 配置路由
const routeConfig : Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'stock', component: StockManageComponent},
  {path: 'stock/:id', component: StockFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MenuComponent,
    ContentComponent,
    FootComponent,
    StockManageComponent,
    StarsComponent,
    DashboardComponent,
    StockFormComponent,
    StockFilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
