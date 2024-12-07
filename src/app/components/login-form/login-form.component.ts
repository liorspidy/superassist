import { Component, OnInit, signal } from '@angular/core';
import { InputTextComponent } from '../../base-components/input-text/input-text.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LogoComponent } from "../../base-components/logo/logo.component";
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [InputTextComponent, CommonModule, ReactiveFormsModule, LogoComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  error = signal<string>('');

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email]],
      password: ['' ,[Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.router.navigate(['/main']);
    } else {
      this.error.set('נא למלא את כל הפרטים כדי להתחבר');
    }
  }
}
