import { CommonModule } from '@angular/common';
import { Component, input, OnInit, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputTextComponent,
      multi: true,
    },
  ],
})
export class InputTextComponent implements OnInit, ControlValueAccessor {
  type = input.required<string>();
  hasLabel = input<boolean>(true);
  hasError = input<boolean>(true);
  label = input<string>();
  placeholder = input<string>();
  required = input<boolean>(false);
  err = input<string>();
  disabled = input<boolean>(false);
  direction = input<'ltr' | 'rtl'>();
  
  dir = signal<'ltr' | 'rtl'>('rtl');
  innerType = signal<string>('text');
  isPasswordVisible = signal<boolean | null>(null);
  value: any = null;
  onChange = (val:any) => {};
  onTouched = () => {};
  isDisabled = false;

  ngOnInit(): void {
    this.dir.set(this.direction() || 'rtl');
    this.innerType.set(this.type());
    if (this.type() === 'password') {
      this.isPasswordVisible.set(false);
    }
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;

    // Determine direction based on the first character
    if (inputValue) {
      const firstChar = inputValue[0];
      this.dir.set(this.isRtlChar(firstChar) ? 'rtl' : 'ltr');
    }

    this.onChange(inputValue);
    this.onTouched();
  }

  onBlur(event: Event) {
    this.onTouched();
  }

  private isRtlChar(char: string): boolean {
    const rtlRange = /[\u0590-\u08FF]/;
    return rtlRange.test(char);
  }

  onPasswordVisibility() {
    this.isPasswordVisible.update((prev) => {
      const newValue = !prev;
      this.innerType.set(newValue ? 'text' : 'password');
      return newValue;
    });
  }
}
