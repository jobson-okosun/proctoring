import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-details',
  imports: [RouterLink, MenuModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export default class Details {

}
