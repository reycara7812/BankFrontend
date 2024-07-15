import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbutton',
  templateUrl: './navbutton.component.html',
  styleUrl: './navbutton.component.css',
})
export class NavbuttonComponent {
  @Input() routerLinkValue: string | any[];
  @Input() buttonName: string;
}
