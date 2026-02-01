import { APP_PATHS } from '@/core/constants';
import { AuthService } from '@/core/services/auth.service';
import { LayoutService } from '@/core/services/layout.service';
import { ToastService } from '@/core/services/toast.service';
import { AppInputLayout, AppLayoutContent, AppLogo } from '@/shared/components';
import { DButton } from '@/shared/directives/button.directive';
import { DErrorMessage } from '@/shared/directives/error-message.directive';
import { DInputSuffix } from '@/shared/directives/input-suffix.directive';
import { DInput } from '@/shared/directives/input.directive';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const EXIST_EMAILS = ['test@gmail.com', 'cuongnguyenit1@gmail.com']

@Component({
  selector: 'app-signin',
  templateUrl: './signin.html',
  styleUrl: './signin.css',
  imports: [
    DButton,
    DInput,
    DInputSuffix,
    DErrorMessage,
    AppInputLayout,
    AppLayoutContent,
    AppLogo,
    CommonModule,
    ReactiveFormsModule]
})
export class Signin {

  constructor(
    private router: Router,
    private toastService: ToastService,
    private authService: AuthService,
    private layoutService: LayoutService
  ) { }

  emailIsNotExists: boolean = false

  email = new FormControl('', [Validators.required, Validators.email]);

  get inputBgClass() {
    if (this.emailIsNotExists) {
      return 'bg-input-linear-danger';
    }
    return "bg-input-linear-primary"
  }

  get inputPlaceholder() {
    if (this.emailIsNotExists) {
      return "Try Again";
    }
    return "E-mail Address"
  }

  resetValue() {
    this.email.reset()
  }

  private checkEmailExist(email: string) {
    return EXIST_EMAILS.includes(email.trim().toLowerCase());
  }

  private handleSigninError() {
    this.emailIsNotExists = true;
    this.resetValue()
    this.layoutService.setOverlayClass('bg-linear-secondary')
    const toastId = this.toastService.error(
      "This E-mail Address doesn't exist.",
      {
        title: "Something went wrong!",
        duration: 2000,
        action: {
          label: "Try Again",
          onClick: () => {
            this.toastService.remove(toastId);
          }
        }
      }
    );
  }

  private handleSigninSuccess(token: string) {
    const toastId = this.toastService.success(
      'You will be notified about our updates and projects.',
      {
        title: "Congratulations!",
        action: {
          label: "Okay",
          onClick: () => {
            this.toastService.remove(toastId);
          }
        }
      }
    );
    this.authService.setToken(token)
    this.router.navigate([APP_PATHS.WAITING_LIST.ROOT, APP_PATHS.WAITING_LIST.SIGNED_IN], { replaceUrl: true });
  }

  onSignInClick(): void {
    if (!this.email.value || this.email.invalid) return

    if (!this.checkEmailExist(this.email.value)) {
      this.handleSigninError();
      return;
    }

    this.handleSigninSuccess(this.email.value);
  }
}
