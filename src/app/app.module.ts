import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { BreadcrumbModule} from './modules/breadcrumb/breadcrumb.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './modules/breadcrumb/breadcrumb.component';
import { PhotoMediaComponent } from './modules/photo-media/photo-media.component';
import { ImagecardComponent } from './modules/imagecard/imagecard.component';
import { ContentComponent } from './modules/content/content.component';
import { PagesComponent } from './pages/pages.component';
import { ContentpageComponent } from './pages/contentpage/contentpage.component';
import { ImagecardpageComponent } from './pages/imagecardpage/imagecardpage.component';
import { PhotoMediapageComponent } from './pages/photo-mediapage/photo-mediapage.component';
import { BreadcrumbpageComponent } from './pages/breadcrumbpage/breadcrumbpage.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    PhotoMediaComponent,
    ImagecardComponent,
    ContentComponent,
    PagesComponent,
    ContentpageComponent,
    ImagecardpageComponent,
    PhotoMediapageComponent,
    BreadcrumbpageComponent
  ],
  imports: [
    BrowserModule,
    BreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
