import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http/';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MatInputModule, MatButtonModule, MatListModule, MatCardModule } from '@angular/material';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

import { SmartStoreService } from './services/smart-store.service';
import { UploadService } from './services/upload.service';
import { OldStuffService } from './services/old-stuff.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SocketIoModule, SocketIoConfig, Socket } from 'ng-socket-io';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { MatTabsModule } from '@angular/material/tabs';

const appRoutes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'add', component: AddItemComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: '**', component: MainViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    AddItemComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    SocketIoModule.forRoot({url: 'http://balabanovo.westeurope.cloudapp.azure.com'}),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    SmartStoreService,
    OldStuffService,
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
