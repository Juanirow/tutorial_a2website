import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';



@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, NavbarComponent, JumbotronComponent,
    HomeComponent, AboutComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}
