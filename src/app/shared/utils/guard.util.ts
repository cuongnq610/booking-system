import { APP_PATHS } from "@/core/constants"
import { AuthService } from "@/core/services/auth.service"
import { inject } from "@angular/core"
import { CanActivateFn, Router } from "@angular/router"

export const requireAuth: CanActivateFn = () => {
    const authService = inject(AuthService)
    const router = inject(Router);

    if (authService.isSignedIn) {
        return true
    }

    // Navigate to signin page if user is not logged in
    return router.createUrlTree([APP_PATHS.WAITING_LIST.ROOT, APP_PATHS.WAITING_LIST.SIGNIN]);
}

export const requireUnAuth: CanActivateFn = () => {
    const authService = inject(AuthService)
    const router = inject(Router);

    if (authService.isSignedIn) {
        // Navigate to signed-in page if user already signed in
        return router.createUrlTree([APP_PATHS.WAITING_LIST.ROOT, APP_PATHS.WAITING_LIST.SIGNED_IN]);
    }

    return true
}