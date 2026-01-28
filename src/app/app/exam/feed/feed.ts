import { Component, computed, inject, signal } from '@angular/core';
import { Paginator } from '../paginator/paginator';
import { RouterLink } from "@angular/router";
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-feed',
  imports: [Paginator, RouterLink],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export default class Feed {
  private _appService = inject(AppService)

  notificationPanelOpened = computed(() => this._appService.notificationPanelOpened())
  feeds = signal(Array.from({ length: 20 }, (_, i) => i + 1));
  demoFeed = signal<MediaStream | null>(null)

  gridCols = computed(() => {
    const count = this.feeds().length;

    if (count === 1) return 'lg:grid-cols-1';
    if (count === 2) return 'lg:grid-cols-2';
    if (count <= 4) return 'lg:grid-cols-2';
    if (count <= 9) return 'lg:grid-cols-3';
    // if (count <= 16) return 'lg:grid-cols-4';
    // if (count <= 25) return 'grid-cols-5';

    return this.notificationPanelOpened() ? 'lg:grid-cols-5' : 'lg:grid-cols-6'
  });

  async ngOnInit() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    this.demoFeed.set(stream)
  }
}
