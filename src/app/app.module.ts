import { AUthInterceptor } from './core/interceptors/auth.interceptor';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { LoginComponent } from './login/login.component'
import { HTTP_INTERCEPTORS } from '@angular/common/http'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent, LoginComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AUthInterceptor,
      multi: true
    }
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
