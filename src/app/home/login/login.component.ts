import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { UserService } from 'src/app/core/user/user.service';
import { NotifyService } from 'src/app/shared/components/notify/notify.service';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
        private user: UserService,
        private notify: NotifyService
    ) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
        this.platformDetectorService.isPlatformBrowser() &&
            this.emailInput.nativeElement.focus();
    }

    login() {
        const email = this.loginForm.get('email').value;
        const password = this.loginForm.get('password').value;

        this.authService
            .authenticate(email, password)
            .subscribe(
                () => {
                    this.notify.success('Login efetuado com sucesso.')
                    this.router.navigate(['user', this.user.getUserId()])
                },
                err => {
                    this.notify.warning('E-mail ou senha incorretos.')
                    this.loginForm.reset();
                    this.platformDetectorService.isPlatformBrowser() &&
                        this.emailInput.nativeElement.focus();
                }
            );
    }
}