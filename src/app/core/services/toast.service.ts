import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast, ToastOptions } from './toast.definition';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toasts$ = new BehaviorSubject<Toast[]>([]);

  toasts = this.toasts$.asObservable();

  show(
    toast: Omit<Toast, 'id'>,
  ) {
    const newToast: Toast = {
      id: Date.now(),
      ...toast,
    };

    this.toasts$.next([...this.toasts$.value, newToast]);

    // Auto-remove toast after duration if specified
    if (newToast.duration) {
      setTimeout(() => {
        this.scheduleRemoving(newToast.id)
      }, newToast.duration);
    }

    return newToast.id;
  }

  scheduleRemoving(id: number) {
    // schedule toast with this id to be removed
    this.toasts$.next(
      this.toasts$.value.map(t => {
        if (t.id === id) {
          return { ...t, removing: true }
        }

        return t
      })
    );

    // remove toast with id after schedule time
    setTimeout(() => {
      this.remove(id)
    }, 200)
  }

  remove(id: number) {
    this.toasts$.next(
      this.toasts$.value.filter(t => t.id !== id)
    );
  }

  error(message: string, options?: ToastOptions) {
    return this.show({ message, type: 'error', ...options });
  }

  success(message: string, options?: ToastOptions) {
    return this.show({ message, type: 'success', ...options });
  }

  warn(message: string, options?: ToastOptions) {
    return this.show({ message, type: 'warning', ...options });
  }

  info(message: string, options?: ToastOptions) {
    return this.show({ message, type: 'info', ...options });
  }
}
