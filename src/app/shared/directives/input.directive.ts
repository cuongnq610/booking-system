import { Directive, HostBinding, Input } from '@angular/core';

export type InputSize = "sm" | "md" | "lg";

@Directive({
  selector: '[appInput]',
})
export class DInput {

  private readonly INPUT_SIZE_CLASS_MAPPING: Record<InputSize, string> = {
    sm: "h-8 text-sm",
    md: "h-10 text-md",
    lg: "h-12 text-base",
  };

  private appendedClasses: string[] = [];

  @Input() size: InputSize = "md";

  get inputSizeClass() {
    return this.INPUT_SIZE_CLASS_MAPPING[this.size]
  }

  @HostBinding('class')
  get classes() {
    return [this.inputSizeClass, "px-3 outline-none rounded-lg"].concat(this.appendedClasses).join(' ');
  }

  appendClass(className: string) {
    this.appendedClasses.push(className);
  }

}
