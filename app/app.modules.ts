import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/LoginComponent';
import { HomeComponent } from './home/HomeComponent';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
import { routing }        from './app.routing';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

       routing
    ],
    declarations: [
        LoginComponent,
        HomeComponent,
        AppComponent
    ],
    providers: [

    ],
    bootstrap: [HomeComponent,LoginComponent,AppComponent]
})
export class AppModule { }