import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { NavbarComponent } from './components/commons/navbar/navbar.component';
import { InstagramWidgetComponent } from './components/commons/widgets/instagram-widget/instagram-widget.component';
import { SpotifyWidgetComponent } from './components/commons/widgets/spotify-widget/spotify-widget.component';
import { CommingSoonComponent } from './components/commons/comming-soon/comming-soon.component';
import { CatalogPinesComponent } from './components/pages/catalog-pines/catalog-pines.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './components/commons/loading-spinner/loading-spinner.component';
import { HoverClassDirective } from './directives/hover-class.directive';
import { TicketCartComponent } from './components/commons/ticket-cart/ticket-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { PaymentsDataComponent } from './components/commons/payments-data/payments-data.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent,
    InstagramWidgetComponent,
    SpotifyWidgetComponent,
    CommingSoonComponent,
    CatalogPinesComponent,
    LoadingSpinnerComponent,
    HoverClassDirective,
    TicketCartComponent,
    PaymentsDataComponent,
  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
