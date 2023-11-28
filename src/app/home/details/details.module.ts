import { NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { DetailsComponent } from "./details.component";
import { DetailsRoutingModule } from "./details-routing.module";

@NgModule({
  imports: [NativeScriptCommonModule, DetailsRoutingModule],
  declarations: [DetailsComponent],
  exports: [DetailsRoutingModule]

})
export class DetailsModule {}
