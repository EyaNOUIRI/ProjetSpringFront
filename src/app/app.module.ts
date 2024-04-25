import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CopieComponent } from './copie/copie.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    CopieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
