import { Component, DestroyRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { AuthService } from '../auth.service';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatButton, MatIcon, RouterLink, MatFormFieldModule, MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  constructor( private destroyRef: DestroyRef, private authService: AuthService, private router: Router ){
    merge(this.form.controls.email.statusChanges, this.form.controls.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  errorMessage = signal('');
  hide = signal(true);

  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required]
    }),
    password: new FormControl('', {
      validators: [Validators.minLength(6), Validators.required]
    })
  })

  get emailIsInvalid () {
    return this.form.controls.email.touched && this.form.controls.email.dirty && this.form.controls.email.invalid
  }

  get passwordIsInvalid() {
    return this.form.controls.password.touched && this.form.controls.password.dirty && this.form.controls.password.invalid
  }

  ngOnInit() {
    const subscription = this.form.valueChanges.pipe(debounceTime(500)).subscribe({
      next: value => {
        window.localStorage.setItem('saved-login-form', JSON.stringify({email: value.email}))
      }
    })

    this.destroyRef.onDestroy(() => subscription.unsubscribe())
  }

  onSubmit(){
    if (this.form.controls.email.invalid || this.form.controls.password.invalid){
      if (this.emailIsInvalid) {
        console.log('Invalid email')
      }
      if (this.passwordIsInvalid) {
        console.log('Invalid password')
      }
      return
    }

    const enteredEmail = this.form.value.email
    const enteredPassword = this.form.value.password

    this.authService.signup(enteredEmail!, enteredPassword!).subscribe({
      next: (resData) => console.log(resData),
      error: (error) => console.log(error)
    })

    this.form.reset()

    this.router.navigate(['/'])
  }

  updateErrorMessage() {
    if (this.form.controls.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.form.controls.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
