import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  white = input<boolean>(false);
  mode = input<'vertical' | 'landscape'>('vertical');
  short = input<boolean>(false);
}
