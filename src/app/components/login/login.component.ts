import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.initializeForm();
  }
  private initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  handleLogin(): void {
    if (this.isFormValid()) {
      const { email, password } = this.loginForm.value;

      console.log('Login attempt:', { email, password });
      localStorage.setItem('usuario', JSON.stringify({ email, password }));

      this.redirectToHome();
    } else {
      this.showFormError();
    }
  }
  private isFormValid(): boolean {
    return this.loginForm.valid;
  }
  private redirectToHome(): void {
    this.router.navigate(['/home']);
  }
  private showFormError(): void {
    alert('Please fill out the form correctly.');
  }
}
