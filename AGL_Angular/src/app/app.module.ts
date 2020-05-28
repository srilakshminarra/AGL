import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AGLTest } from './dataservices/owners-and-animals.service';
import { CatlistComponent } from './catlist/cat-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    CatlistComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AGLTest
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

