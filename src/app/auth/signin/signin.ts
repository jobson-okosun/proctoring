import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngxpert/hot-toast';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export default class Signin {

  private fb = inject(NonNullableFormBuilder);
  private router = inject(Router);
  private _toast = inject(HotToastService);

  year = new Date().getFullYear()
  submitted = signal(false);
  errorMessage = signal<string | null>(null);

  form = this.fb.group({
    email: this.fb.control('', { validators: [Validators.required, Validators.email] }),
    password: this.fb.control('', { validators: [Validators.required] }),
  });

  submit(event: Event): void {
    this.router.navigateByUrl('/auth/mfa')

    // const btn = event.target as HTMLButtonElement;
    // btn.disabled = true;

    // this.submitted.set(true);
    // this.errorMessage.set(null);

    // if (this.form.invalid) {
    //   btn.disabled = false;
    //   return;
    // }

    // this.auth
    //   .login(this.form.getRawValue())
    //   .pipe(
    //     this._toast.observe({
    //       loading: 'Signing in...',
    //       success: 'Signed in successfully',
    //       error: 'Sign in failed. Please check your credentials.',
    //     }),
    //     finalize(() => {
    //       btn.disabled = false;
    //     }),
    //   )
    //   .subscribe({
    //     next: () => {
    //       void this.router.navigateByUrl('/app');
    //     },
    //   });
  }
}
