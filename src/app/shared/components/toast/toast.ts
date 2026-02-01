import { ToastType } from '@/core/services/toast.definition';
import { ToastService } from '@/core/services/toast.service';
import { DButton } from '@/shared/directives/button.directive';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  imports: [CommonModule, DButton],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class AppToast {

  private readonly TOAST_CLASS = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
    warning: 'bg-yellow-600'
  }

  constructor(
    private toastService: ToastService
  ) { }

  get toasts$() {
    return this.toastService.toasts;
  }

  typeClass(type: ToastType) {
    return this.TOAST_CLASS[type];
  }
}
