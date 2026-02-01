import { Component } from '@angular/core';
import { LayoutService } from '@/core/services/layout.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class AppLayout {

  constructor(private layoutSerice: LayoutService) { }

  get backgroundUrl() {
    return this.layoutSerice.snapshot.backgroundUrl
  }

  get overlayClass() {
    return this.layoutSerice.snapshot.overlayClass
  }
}
