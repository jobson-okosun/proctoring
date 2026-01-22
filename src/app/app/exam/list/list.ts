import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-list',
  imports: [MenuModule, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export default class List {
  private _router = inject(Router)
  private _route = inject(ActivatedRoute)

  openExam() {
    this._router.navigate(['1'], { relativeTo: this._route})
  }
} 
