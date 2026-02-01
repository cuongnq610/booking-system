import { AppInputLayout, AppLayoutContent, AppLogo } from '@/shared/components';
import { DButton } from '@/shared/directives/button.directive';
import { DInputPrefix } from '@/shared/directives/input-prefix.directive';
import { DInputSuffix } from '@/shared/directives/input-suffix.directive';
import { DInput } from '@/shared/directives/input.directive';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signed-in',
  templateUrl: './signed-in.html',
  styleUrl: './signed-in.css',
  imports: [
    DButton,
    DInput,
    DInputPrefix,
    DInputSuffix,
    AppInputLayout,
    AppLayoutContent,
    AppLogo,
    CommonModule]
})
export class SignedIn {

}
