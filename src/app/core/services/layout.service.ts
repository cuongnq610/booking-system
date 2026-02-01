import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, switchMap } from 'rxjs';
import { LayoutData } from './layout.definition';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private layoutData$ = new BehaviorSubject<LayoutData>({
    backgroundUrl: '/desktop/waiting-list/signin-bg.png',
    overlayClass: ''
  })

  get snapshot() {
    return this.layoutData$.value
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      // 1. Only trigger when navigation finishes
      filter(event => event instanceof NavigationEnd),
      switchMap(() => {
        // 2. Traverse to the deepest child to get the "leaf" route data
        let activeRoute = this.activatedRoute;

        while (activeRoute.firstChild) {
          activeRoute = activeRoute.firstChild;
        }

        return activeRoute.data;
      })
    ).subscribe((data: LayoutData) => {
      this.updateLayout(data)
    })
  }

  private updateLayout(patch: Partial<LayoutData>) {
    this.layoutData$.next({
      ...this.snapshot,
      ...patch
    });
  }

  public setBackgroundUrl(backgroundUrl: string) {
    this.updateLayout({
      backgroundUrl
    })
  }

  public setOverlayClass(overlayClass: string) {
    this.updateLayout({
      overlayClass
    })
  }
}
