import { Component, inject, signal } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms'
import { DialogModule } from 'primeng/dialog'
import { HotToastService } from '@ngxpert/hot-toast'

@Component({
  selector: 'app-settings',
  imports: [CommonModule, ReactiveFormsModule, DialogModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export default class Settings {
  private fb = inject(FormBuilder)
  private toast = inject(HotToastService)

  showProfileModal = signal(false)
  showPasswordModal = signal(false)
  show2FAModal = signal(false)

  pendingAction: 'profile' | 'password' | null = null

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
  })

  passwordForm = this.fb.group(
    {
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
    { validators: this.passwordMatchValidator }
  )

  twoFAForm = this.fb.group({
    code: ['', Validators.required],
  })

  openProfileModal() {
    this.profileForm.reset()
    this.showProfileModal.set(true)
  }

  openPasswordModal() {
    this.passwordForm.reset()
    this.showPasswordModal.set(true)
  }

  submitProfile() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched()
      return
    }
    this.pendingAction = 'profile'
    this.showProfileModal.set(false)
    this.show2FAModal.set(true)
  }

  submitPasswordChange() {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched()
      return
    }
    this.pendingAction = 'password'
    this.showPasswordModal.set(false)
    this.show2FAModal.set(true)
  }

  confirm2FA() {
    if (this.twoFAForm.invalid) {
      this.twoFAForm.markAllAsTouched()
      return
    }

    if (this.pendingAction === 'profile') {
      this.toast.success('Profile updated successfully')
    }

    if (this.pendingAction === 'password') {
      this.toast.success('Password changed successfully')
    }

    this.pendingAction = null
    this.twoFAForm.reset()
    this.show2FAModal.set(false)
  }

  passwordMatchValidator(control: AbstractControl) {
    const newPassword = control.get('newPassword')?.value
    const confirmPassword = control.get('confirmPassword')?.value
    return newPassword === confirmPassword ? null : { mismatch: true }
  }
}
