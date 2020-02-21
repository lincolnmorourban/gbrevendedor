import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compra } from './compra';

const API_URL = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class CompraService {

    compras: Compra[] = [];
    comprasFiltered: Compra[] = [];

    constructor(private http: HttpClient) { }

    listCompraUser() {
        return this.http.get<Compra[]>(API_URL + '/compras');
    }

    cadastrarNovaCompra(novaCompra: Compra) {
        return this.http.post(API_URL + '/compras', novaCompra);
    }

}