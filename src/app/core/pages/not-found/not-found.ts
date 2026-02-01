import { APP_PATHS } from '@/core/constants';
import { LayoutService } from '@/core/services/layout.service';
import { AppLayoutContent, AppLogo } from '@/shared/components';
import { DButton } from '@/shared/directives/button.directive';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [AppLogo, DButton, AppLayoutContent],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate([APP_PATHS.HOME])
  }
}
