import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-participant',
  imports: [RouterLink, MenuModule],
  templateUrl: './participant.html',
  styleUrl: './participant.css',
})
export default class Participant {
  private _appService = inject(AppService)
  
  notificationOpen = computed(() => this._appService.notificationPanelOpened())
  demoFeed = signal<MediaStream | null>(null)

  async ngOnInit() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    this.demoFeed.set(stream)
  }
}
