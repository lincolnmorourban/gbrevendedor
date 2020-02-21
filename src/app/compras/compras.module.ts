import { NgModule } from '@angular/core';
import { CompraListModule } from './compra-list/compra-list.module';
import { CompraModule } from './compra/compra.module';
import { CompraFormModule } from './compra-form/compra-form.module';

@NgModule({
    imports: [
        CompraListModule,
        CompraModule,
        CompraFormModule,
    ]
})
export class ComprasModule { }