import { GlobalFunctionsService } from './../../../services/global-functions.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup; // Reactive form for login
  loading = false;
  // Injecting necessary services
  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    public global: GlobalFunctionsService) { }

  // Lifecycle hook that gets called after the component's view has been initialized
  ngOnInit(): void {
    this.initForm(); // Initialize the login form
  }


  // Initialize the reactive form with validation rules
  initForm(): void {
    this.loginForm = this.fb.group({
      username: [null, Validators.required], // Username is required
      password: [null, Validators.required] // Password is required
    });
  }

  // Method to handle form submission
  onSubmit() {
    this.loading = true;
    this.authService.findUserByEmail(this.loginForm.value.username).subscribe(user => {
      if (user) {
        this.authService.getUserFromToken(user)
        this.router.navigate(['/']);
      }else{
        this.loading = false;
        this.global.throwMessage('Error','error');
      }
    });
  }
}
