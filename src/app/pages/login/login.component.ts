import { Component } from '@angular/core';
import { LoginFormComponent } from "../../components/login-form/login-form.component";
import { MovingBackgroundComponent } from "../../base-components/moving-background/moving-background.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent, MovingBackgroundComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
