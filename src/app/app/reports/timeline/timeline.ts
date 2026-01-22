import { Component, signal } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-timeline',
  imports: [PaginatorModule],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export default class Timeline {
  infractions = signal([1,2,3,4,5,6])

  onPageChange(event: any) {

  }
}
