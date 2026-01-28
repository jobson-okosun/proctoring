import { Component, computed, inject, signal } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { LiveNotifications } from '../sidebar-container/live-notifications/live-notifications';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { AppService } from '../../services/app.service';
import { Topbar } from '../topbar/topbar';
import { SidebarContainer } from '../sidebar-container/sidebar-container';

@Component({
  selector: 'app-layout',
  imports: [ RouterOutlet, LiveNotifications, CdkDrag, Topbar, SidebarContainer],
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
