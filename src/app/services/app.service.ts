import { inject, Injectable, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { Router, NavigationEnd } from "@angular/router";
import { filter, map } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AppService {
    private _router = inject(Router)

    constructor() {
        if(window.matchMedia('(max-width: 1000px)').matches) {
            this.notificationPanelOpened.set(false)
        }
    }

    notificationPanelOpened = signal(true)
    currentUrl = toSignal(this._router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd), map(e => e.urlAfterRedirects)), { initialValue: this._router.url });
}