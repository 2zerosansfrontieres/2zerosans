import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {GoogleMapsModule} from '@angular/google-maps';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NousComponent } from './nous/nous.component';
import { LinkColorDirective } from './link-color.directive';
import {MatButtonModule} from '@angular/material/button';
import { YoutubeComponent } from './youtube/youtube.component';
import { ActualiteComponent } from './actualite/actualite.component';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { CookieService } from 'ngx-cookie-service';
import { GaleryComponent } from './galery/galery.component';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import {MatInputModule} from '@angular/material/input';
import { CookiesService } from './cookies.service'
import { EventComponent } from './event/event.component';
import { ModalEventComponent } from './modal-event/modal-event.component';
import {MatRadioModule} from '@angular/material/radio';
import { MembreComponent } from './membre/membre.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AccueilComponent,
    NousComponent,
    LinkColorDirective,
    YoutubeComponent,
    ActualiteComponent,
    GaleryComponent,
    ModalComponent,
    EventComponent,
    ModalEventComponent,
    MembreComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    YouTubePlayerModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    NgxGalleryModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [CookieService,CookiesService],
  entryComponents: [
    ModalComponent,ModalEventComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
