import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompraService } from '../compra/compra.service';
import { Router } from '@angular/router';
import { Compra } from '../compra/compra';
import { UserService } from 'src/app/core/user/user.service';
import { NotifyService } from 'src/app/shared/components/notify/notify.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './compra-form.component.html'
})
export class CompraFormComponent implements OnInit {

    compraForm: FormGroup;
    userId: number;
    @ViewChild('codigoInput') codigoInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private compraService: CompraService,
        private router: Router,
        private userService: UserService,
        private notify: NotifyService,
        private platformDetectorService: PlatformDetectorService,
    ) { }

    ngOnInit(): void {
        this.compraForm = this.formBuilder.group({
            codigoCompra: ['', Validators.required],
            dataCompra: ['', Validators.required],
            valorCompra: ['', Validators.required]
        })
        this.userId = this.userService.getUserId();
    }

    voltarListaCompra() {
        this.router.navigate(['user', this.userService.getUserId()])
    }

    cadastrarCompra() {
        const novaCompra = this.compraForm.getRawValue() as Compra;
        novaCompra.userId = Number(this.userService.getUserId());
        novaCompra.statusCompra = "Em validação";
        novaCompra.porcentagemCashBack = 10;

        this.compraService.cadastrarNovaCompra(novaCompra).subscribe(() => {
            this.notify.success('Compra registrada com sucesso.')
            this.router.navigate(['user', this.userService.getUserId()])
        },
            err => {
                this.notify.warning('Falha ao registrar a compra.')
                this.compraForm.reset();
                this.platformDetectorService.isPlatformBrowser() &&
                    this.codigoInput.nativeElement.focus();
            }
        );
    }

}