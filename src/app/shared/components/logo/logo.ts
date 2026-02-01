import { AfterContentInit, Component, ContentChild, ElementRef, TemplateRef } from '@angular/core';
import { DButton } from '@/shared/directives/button.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  imports: [DButton, CommonModule],
  templateUrl: './logo.html',
  styleUrl: './logo.css',
})
export class AppLogo implements AfterContentInit {
  @ContentChild(TemplateRef)
  template: TemplateRef<any> | null = null;

  hasContent = false;

  ngAfterContentInit() {
    this.hasContent = !!this.template;
  }
}
