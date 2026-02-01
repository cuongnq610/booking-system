import { DInput } from '@/shared/directives/input.directive';
import { DInputPrefix } from '@/shared/directives/input-prefix.directive';
import { DInputSuffix } from '@/shared/directives/input-suffix.directive';
import { Component, ContentChild } from '@angular/core';

@Component({
  selector: 'app-input-layout',
  imports: [],
  templateUrl: './input-layout.html',
  styleUrl: './input-layout.css',
})
export class AppInputLayout {
  @ContentChild(DInput) inputComponent: DInput | null = null;

  @ContentChild(DInputPrefix) prefixComponent: DInputPrefix | null = null;

  @ContentChild(DInputSuffix) suffixComponent: DInputSuffix | null = null;

  ngAfterContentInit() {
    if (!this.inputComponent) return

    if (this.prefixComponent) {
      // Adjust input padding to accommodate prefix
      this.inputComponent.appendClass("pl-6")
    }

    if (this.suffixComponent) {
      // Adjust input padding to accommodate suffix
      this.inputComponent.appendClass("-mr-4 pr-6")
    }
  }
}
