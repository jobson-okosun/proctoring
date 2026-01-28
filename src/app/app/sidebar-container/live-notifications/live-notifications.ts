import { Component, output } from '@angular/core';

@Component({
  selector: 'app-live-notifications',
  imports: [],
  templateUrl: './live-notifications.html',
  styleUrl: './live-notifications.css',
})
export class LiveNotifications {
  notificationOpen = output();

  closeNotificationbar() {
    this.notificationOpen.emit()
  }
}
