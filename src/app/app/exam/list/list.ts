import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { AppService } from '../../../services/app.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [MenuModule, RouterLink, NgClass],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export default class List {
  private _router = inject(Router)
  private _route = inject(ActivatedRoute)
  private _appService = inject(AppService)
  
  notificationOpen = computed(() => this._appService.notificationPanelOpened())

  openExam() {
    this._router.navigate(['1'], { relativeTo: this._route})
  }
} 
