import { Directive, Input, HostListener, HostBinding} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[checkToggle]'
})

export class SidebarLeftToggleDirective {
  @Input('checkToggle') partner;
  constructor(
  ) {}


@HostBinding('class.active') isOpen = false;

@HostListener('click') toggleOpen($event) {
  this.isOpen = !this.isOpen;
}


}
