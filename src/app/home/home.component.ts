import { RouterExtensions } from '@nativescript/angular';
import { FlickService } from './../core/service/flick.service';
import { Component } from '@angular/core';
import { ItemEventData } from '@nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'ns-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  flicks = this.filckService.getFlicks();

  constructor(
    private filckService: FlickService,
    private routerExtensions: RouterExtensions
  ) {}

  onFlickTap(args: ItemEventData): void {
    this.routerExtensions.navigate(['details', this.flicks[args.index].id])
  }

  onLogin() : void {
    this.routerExtensions.navigate(['login'])
  }
}
