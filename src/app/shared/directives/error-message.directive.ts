import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appErrorMessage]',

})
export class DErrorMessage {

  @Input() show: boolean = false;

  @HostBinding('class')
  get classes() {
    const baseClasses = [
      "text-red-500 text-shadow-2xs mt-1 block",
      "transition-all duration-200 ease-out",
      "overflow-hidden",
      "opacity-0 -translate-y-1",
    ]

    if (this.show) {
      baseClasses.push(
        "max-h-20 opacity-100 translate-y-0"
      )
    }

    return baseClasses.join(' ')
  }
}
