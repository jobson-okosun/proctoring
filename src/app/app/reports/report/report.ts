import { Component, signal } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { MOCK_USERS } from '../../../utils/mock';
import { MenuModule } from 'primeng/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-report',
  imports: [PaginatorModule,  MenuModule, RouterLink],
  templateUrl: './report.html',
  styleUrl: './report.css',
})
export default class Report {
  users = signal(MOCK_USERS);

  onPageChange(event: any) {}
}
