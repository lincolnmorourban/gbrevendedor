import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewUser } from './newUser';
import { CadastroService } from './cadastro.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { NotifyService } from 'src/app/shared/components/notify/notify.service';

@Component({ templateUrl: './cadastro.component.html' })
export class CadastroComponent implements OnInit {

    cadastroForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder,
        private cadastroService: CadastroService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
        private notify: NotifyService) { }

    ngOnInit(): void {

        this.cadastroForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email],],
            fullName: ['', [Validators.required, Validators.maxLength(40)]],
            cpf: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
        this.platformDetectorService.isPlatformBrowser() &&
            this.emailInput.nativeElement.focus();
    }

    cadastrar() {
        const newUser = this.cadastroForm.getRawValue() as NewUser;
        this.cadastroService
            .cadastrar(newUser)
            .subscribe(
                () => {
                    this.notify.success("Cadastro efetuado com sucesso.")
                    this.router.navigate([''])
                },
                err => this.notify.warning("Falha ao cadastrar o revendedor: " + err.error)
            );
    }
}