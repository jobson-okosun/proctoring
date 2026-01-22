import { Routes } from "@angular/router";
import { Layout } from "../app/layout/layout";

const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full'},
            { path: 'overview', loadComponent: () => import('../app/dashboard/dashboard') },
            { 
                path: 'exams',
                children: [
                    { path: '', loadComponent: () => import('../app/exam/list/list') },
                    { path: ':examId', loadComponent: () => import('../app/exam/details/details') },
                    { path: ':examId/participants',  loadComponent: () => import('../app/exam/participants/participants') },
                    { path: ':examId/participants/:participantId',  loadComponent: () => import('../app/exam/participant/participant') },
                    { path: ':examId/feed',  loadComponent: () => import('../app/exam/feed/feed') },
                ] 
            },
            { 
                path: 'reports',
                children: [
                    { path: '', loadComponent: () => import('../app/reports/list/list') },
                    { path: ':examId', loadComponent: () => import('../app/reports/report/report') },
                    { path: ':examId/timeline', loadComponent: () => import('../app/reports/timeline/timeline') }
                ]
            },
            { path: 'settings', loadComponent: () => import('../app/settings/settings') },
            { path: 'messaging', loadComponent: () => import('../app/messaging/messaging') }
        ]
    }
]

export default routes