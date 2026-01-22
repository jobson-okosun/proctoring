import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-mfa',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './mfa.html',
  styleUrl: './mfa.css',
})
export default class Mfa {
  private fb = inject(NonNullableFormBuilder);
  private router = inject(Router);

  year = new Date().getFullYear()
  submitted = signal(false);
  form = this.fb.group({
    code: this.fb.control('', { validators: [Validators.required]}),
  });

  verify(event: Event): void {
    this.router.navigateByUrl('/app')
    
    // this.submitted.set(true);

    // if (this.form.invalid) {
    //   return;
    // }

  }
}
