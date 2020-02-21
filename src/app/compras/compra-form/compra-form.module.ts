import { NgModule } from '@angular/core';
import { CompraFormComponent } from './compra-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MessageModule } from 'src/app/shared/components/message/message.module';
import { RouterModule } from '@angular/router';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
    align: "left",
    allowNegative: true,
    decimal: ",",
    precision: 2,
    prefix: "R$ ",
    suffix: "",
    thousands: "."
};

@NgModule({
    declarations: [CompraFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MessageModule,
        FormsModule,
        RouterModule,
        CurrencyMaskModule
    ],
    providers: [{ provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }]
})
export class CompraFormModule { }