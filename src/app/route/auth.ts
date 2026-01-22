import { Routes } from "@angular/router";

const routes: Routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'signin', loadComponent: () => import('../auth/signin/signin') },
    { path: 'mfa', loadComponent: () => import('../auth/mfa/mfa') }
]

export default routes