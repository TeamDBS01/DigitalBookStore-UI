// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from '../service/user.service';
// import { User } from '../model/User';

// @Component({
//     selector: 'app-signup',
//     templateUrl: './signup.component.html',
//     styleUrls: ['./signup.component.sass'],
//     standalone: false
// })
// export class SignupComponent {

//     name = '';
//     email = '';
//     password = '';
//     confirmPassword = '';
//     registrationFailed = false;
//     registrationErrorMessage = '';  

//     constructor(private router: Router, private userService: UserService) { }

//     signup() {
//         if (this.password !== this.confirmPassword) {
//             return;
//         }

//         const registrationRequest: Partial<User> = {
//             name: this.name,
//             email: this.email,
//             password: this.confirmPassword
//         };

//         this.userService.registerUser(registrationRequest as User).subscribe(
//             (response: User) => {
//                 console.log('Registration successful:', response);
//                 this.router.navigate(['login']);
//             },
//             (error) => {
//                 console.error('Registration failed:', error);
//                 this.registrationFailed = true;
//                 if (error?.message) {  
//                     this.registrationErrorMessage = error.message;
//                 } else if (error?.error?.message) {  
//                     this.registrationErrorMessage = error.error.message;
//                 } else if (typeof error === 'string') {
//                     this.registrationErrorMessage = error;
//                 } else {
//                     this.registrationErrorMessage = 'An unexpected error occurred.';
//                     alert(this.registrationErrorMessage);
//                 }
//             }
//         );
//     }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/User';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { RegistrationRequest } from '../model/RegistrationRequest';

function passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) {
    return null; // Don't validate empty values here, let 'required' handle that
  }

  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecialChar = /[^\w\s]/.test(value);
  const isLongEnough = value.length >= 8;

  const passwordValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isLongEnough;

  return passwordValid ? null : { passwordStrength: true };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass'],
  standalone: false
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), passwordStrengthValidator]),
    confirmPassword: new FormControl('', Validators.required)
  });

  registrationFailed = false;
  registrationErrorMessage = '';

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  get name() { return this.signupForm.get('name')!; }
  get email() { return this.signupForm.get('email')!; }
  get password() { return this.signupForm.get('password')!; }
  get confirmPassword() { return this.signupForm.get('confirmPassword')!; }

  signup() {
    if (this.signupForm.invalid) {
      return;
    }

    if (this.password.value !== this.confirmPassword.value) {
      alert('Passwords do not match.');
      return;
    }

    const formValues = this.signupForm.value;
    const registrationRequest: RegistrationRequest = {
      name: formValues.name !== undefined ? formValues.name : null,
      email: formValues.email !== undefined ? formValues.email : null,
      password: formValues.password !== undefined ? formValues.password : null,
      confirmPassword: formValues.confirmPassword !== undefined ? formValues.confirmPassword : null,
    };

    this.userService.registerUser(registrationRequest as User).subscribe(
      (response: User) => {
        console.log('Registration successful:', response);
        this.router.navigate(['login']);
      },
      (error) => {
        console.error('Registration failed:', error);
        this.registrationFailed = true;
        if (error?.error?.statusCode === 409) {
          alert(this.registrationErrorMessage = 'User with this email already exists.');
        } else if (error?.message) {
          this.registrationErrorMessage = error.message;
        } else if (error?.error?.message) {
          this.registrationErrorMessage = error.error.message;
        } else if (typeof error === 'string') {
          this.registrationErrorMessage = error;
        } else {
          this.registrationErrorMessage = 'An unexpected error occurred.';
          alert(this.registrationErrorMessage);
        }
      }
    );
  }
}