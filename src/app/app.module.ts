import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactsService } from './services/contacts.service';
import { SearchFilterPipe } from './services/search-filter';

@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ContactListComponent, SearchFilterPipe ],
  bootstrap:    [ AppComponent ],
  providers: [ContactsService]
})
export class AppModule { }
