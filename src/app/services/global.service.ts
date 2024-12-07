import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private loadingSignal = signal<boolean>(false);
  readonly loading = this.loadingSignal.asReadonly();

  constructor() { }

  setLoading(loading: boolean) {
    this.loadingSignal.set(loading);
  }
}
