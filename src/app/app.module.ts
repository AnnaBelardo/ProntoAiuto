import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Camera } from '@ionic-native/camera/ngx';

import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';

import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

import { HTTP } from '@ionic-native/http/ngx';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import {HttpClientModule} from '@angular/common/http';

import { FilePath } from '@ionic-native/file-path/ngx';

import { IonicStorageModule } from '@ionic/storage';

import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Uid,
    AndroidPermissions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Media,
    File,
    Camera,
    AndroidPermissions,
    Geolocation,
    LocationAccuracy,
    HTTP,
    PhotoViewer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
