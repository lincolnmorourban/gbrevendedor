import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './compra.component.html'
})
export class CompraComponent implements OnInit {

    userId: number;

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.userId = params.userId;
        });
    }
}