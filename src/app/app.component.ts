import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from "./base-components/loader/loader.component";
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'super-assist';
  loading = this.globalService.loading;

  constructor(private globalService: GlobalService) {}
}
