import { Component, inject, input, output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AppService } from '../../services/app.service';
import { MenuModule } from 'primeng/menu';

interface MenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-topbar',
  imports: [RouterLink, RouterLinkActive, MenuModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {
  private _appService = inject(AppService)

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
    }
  ];

  openNotificationPanel() {
    this._appService.notificationPanelOpened.set(!this._appService.notificationPanelOpened())
  }

  onClose() {
    this.closeSidebar.emit();
  }

  onLogout() { }
}
