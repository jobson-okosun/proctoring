import { Component, inject, signal } from '@angular/core';
import { LiveNotifications } from './live-notifications/live-notifications';
import { Candidates } from './candidates/candidates';
import Messaging from './messaging/messaging';
import { Infractions } from './infractions/infractions';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-sidebar-container',
  imports: [LiveNotifications, Candidates, Messaging, Infractions],
  templateUrl: './sidebar-container.html',
  styleUrl: './sidebar-container.css',
}) 
export class SidebarContainer {
  private _appService  = inject(AppService)
  
  activeTab = signal(0)

  toggleSidebarContainer() {
    this._appService.notificationPanelOpened.set(!this._appService.notificationPanelOpened())
  }
}
 