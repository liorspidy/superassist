import { Component, OnInit } from '@angular/core';
import { InputTextComponent } from '../../base-components/input-text/input-text.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MovingBackgroundComponent } from "../../base-components/moving-background/moving-background.component";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [InputTextComponent, CommonModule, ReactiveFormsModule, RouterLink, MovingBackgroundComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent implements OnInit {
  onSubmit() {}

  loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email]],
      password: ['' ,[Validators.minLength(8)]],
    });
  }

}
