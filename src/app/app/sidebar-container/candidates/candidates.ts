import { Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-candidates',
  imports: [MenuModule, RouterLink],
  templateUrl: './candidates.html',
  styleUrl: './candidates.css',
})
export class Candidates {
  onChat = output()
  onInfractions = output()
}
