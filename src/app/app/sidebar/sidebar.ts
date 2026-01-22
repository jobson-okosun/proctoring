import { Component, input, output, inject, model } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { AppService } from '../../services/app.service';

interface MenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  private router = inject(Router);
  private _appService  = inject(AppService)
  
  isOpen = input<boolean>(false);
  closeSidebar = output<void>();

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      route: '/app/overview',
    },
    {
      label: 'Exams',
      route: '/app/exams',
    }, 
    {
      label: 'Reports',
      route: '/app/reports',
    },
    {
      label: 'Messaging',
      route: '/app/messaging',
    },
    {
      label: 'Settings',
      route: '/app/settings',
    }
  ];

  openNotificationPanel() {
    this._appService.notificationPanelOpened.set(!this._appService.notificationPanelOpened())
  }

  onClose() {
    this.closeSidebar.emit();
  }

  onLogout() {

  }
}
