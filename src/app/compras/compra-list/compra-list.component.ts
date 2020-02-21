import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compra } from '../compra/compra';
import { CompraService } from '../compra/compra.service';
import { User } from 'src/app/core/user/user';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './compra-list.component.html'
})
export class CompraListComponent implements OnInit {

    userId: number;
    users: Observable<User>;
    compras: Compra[] = [];
    comprasFiltered: Compra[] = [];

    constructor(private activatedRoute: ActivatedRoute, private compraService: CompraService,
        private router: Router) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.userId = params.userId;
        });

        this.compraService.listCompraUser()
            .subscribe(compras => {
                this.compras = this.compras.concat(compras);
                this.comprasFiltered = this.compras.filter((compra: Compra) => compra.userId == this.userId);
                this.compras = this.comprasFiltered;
            });
    }

    getTotalCashback(compras) {
        let totalCashBack = 0
        compras.forEach(function (compra) {
            totalCashBack += ((compra.porcentagemCashBack / 100) * compra.valorCompra)
        });

        return totalCashBack.toFixed(2);
    }

    cadastrarNovaCompra() {
        this.router.navigate(['compra/add']);
    }
}