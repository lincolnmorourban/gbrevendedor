import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { CoreModule } from './core/core.module';
import { ComprasModule } from './compras/compras.module';
import { HttpClientModule } from '@angular/common/http';
import { NotifyModule } from './shared/components/notify/notify.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ErrorsModule,
    CoreModule,
    ComprasModule,
    HttpClientModule,
    AppRoutingModule,
    NotifyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
