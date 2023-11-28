import { NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { DetailsComponent } from "./details.component";
import { DetailsRoutingModule } from "./details-routing.module";

@NgModule({
  imports: [NativeScriptCommonModule, DetailsRoutingModule],
  declarations: [DetailsComponent],
  exports: [DetailsRoutingModule],
  schemas: [NO_ERRORS_SCHEMA]

})
export class DetailsModule {}
