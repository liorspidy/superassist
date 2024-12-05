import { Component } from '@angular/core';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';

// Necessary to solve the problem of losing internet connection
LOAD_WASM('assets/wasm/ngx-scanner-qrcode.wasm').subscribe();

@Component({
  selector: 'app-qr-cam',
  standalone: true,
  imports: [],
  templateUrl: './qr-cam.component.html',
  styleUrl: './qr-cam.component.scss'
})
export class QrCamComponent {

}
