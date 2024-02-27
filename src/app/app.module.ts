import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ApplicationConfigService } from '~/app/core/config/application-config.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item/item-detail.component';
import { ItemsComponent } from './item/items.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, HttpClientModule, NgxWebstorageModule.forRoot({prefix: 'sle', separator: '-', caseSensitive: true}),],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent, LoginComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
  constructor(
    applicationConfigService: ApplicationConfigService
  ) {
    applicationConfigService.setEndpointPrefix(process.env.MY_API_ENDPOINT)
  }
}
