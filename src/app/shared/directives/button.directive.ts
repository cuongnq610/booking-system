import { Directive, Host, HostBinding, Input } from '@angular/core';

export type ButtonSize = "sm" | "md" | "lg";

@Directive({
  selector: '[appButton]',
})
export class DButton {
  private readonly BUTTON_SIZE_CLASS_MAPPING: Record<ButtonSize, string> = {
    sm: "px-6 h-8 rounded-2xl text-sm",
    md: "px-8 h-10 rounded-3xl text-md",
    lg: "px-10 h-12 rounded-4xl text-base",
  };

  @Input() size: ButtonSize = "md";

  @Input() disabled: boolean = false;

  @Input() clickable: boolean = true;

  get buttonSizeClass() {
    return this.BUTTON_SIZE_CLASS_MAPPING[this.size]
  }

  get statusClass() {
    return this.clickable ? "cursor-pointer hover:scale-105 duration-200" : "";
  }

  @HostBinding('class')
  get classes() {
    return ["bg-[#F7F3EB] text-[#585244]", this.statusClass, this.buttonSizeClass].join(' ');
  }

  @HostBinding('attr.disabled')
  get isDisabled() {
    return this.disabled ? true : null;
  }
}
