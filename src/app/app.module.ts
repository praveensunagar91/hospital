import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule,FormsModule  } from "@angular/forms";
import { AppComponent } from './app.component';
import { HospitaldisplayComponent } from './hospitaldisplay/hospitaldisplay.component';
import { routing } from './app.routing';
import { MenuComponent } from './menu/menu.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {SidebarModule} from 'primeng/sidebar';
import { SettingsComponent } from './settings/settings.component';
import { GrdFilterPipe } from './search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HospitaldisplayComponent,
    MenuComponent,
    AddDetailsComponent,
    SidebarComponent,
    ContactComponent,
    AboutComponent,
    SettingsComponent,
    GrdFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    routing,
    ConfirmDialogModule,
    NgxPaginationModule,
   SidebarModule

  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
