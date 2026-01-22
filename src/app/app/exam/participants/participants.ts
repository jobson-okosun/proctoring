import { Component, signal } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { PaginatorModule } from 'primeng/paginator';
import { MOCK_USERS } from '../../../utils/mock';
import { MenuModule } from 'primeng/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-participants',
  imports: [DrawerModule, PaginatorModule, MenuModule, RouterLink],
  templateUrl: './participants.html',
  styleUrl: './participants.css',
})
export default class Participants {
  showFilterDrawer = signal(false); 
  users = signal(MOCK_USERS);

  onPageChange(event: any) {}
}
