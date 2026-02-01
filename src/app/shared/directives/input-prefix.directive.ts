import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appInputPrefix]',
})
export class DInputPrefix {

  @HostBinding('class')
  get classes() {
    return ["absolute left-3 transform abs-vertical-center"].join(' ');
  }

}
