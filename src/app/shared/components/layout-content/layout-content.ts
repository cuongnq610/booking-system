import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout-content',
  imports: [],
  templateUrl: './layout-content.html',
  styleUrl: './layout-content.css',
})
export class AppLayoutContent {
  @Input() title: string = ''

  @Input() subTitle: string = ''
}
