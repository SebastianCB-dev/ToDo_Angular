import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ComestiblesComponent } from './pages/comestibles/comestibles.component';
import { RoutingRoutingModule } from './routing-routing.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComestiblesComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
