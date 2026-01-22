import { Component, computed, inject, signal } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LiveNotifications } from '../live-notifications/live-notifications';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { toSignal } from '@angular/core/rxjs-interop'
import { filter, map } from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [Sidebar, RouterOutlet, LiveNotifications,CdkDrag, NgClass],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
}) 
export class Layout {
  private _appService  = inject(AppService)

  sidebarOpen = signal(false);
  notificationOpen = computed(() => this._appService.notificationPanelOpened())
  currentUrl = computed(() => this._appService.currentUrl())
 
  toggleSidebar() {
    this.sidebarOpen.update(val => !val);
  }

  closeSidebar() {
    this.sidebarOpen.set(!this.sidebarOpen());
  }

  toggleNotificationPanel() {
    this._appService.notificationPanelOpened.set(!this._appService.notificationPanelOpened())
  }
}
