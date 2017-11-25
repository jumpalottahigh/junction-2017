import { HttpClientModule } from '@angular/common/http/';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MatInputModule, MatButtonModule, MatListModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { SmartStoreService } from './services/smart-store.service';
import { OldStuffService } from './services/old-stuff.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SocketIoModule, SocketIoConfig, Socket } from 'ng-socket-io';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    SocketIoModule.forRoot({url: 'http://balabanovo.westeurope.cloudapp.azure.com'})
  ],
  providers: [
    SmartStoreService,
    OldStuffService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
