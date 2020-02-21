import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { MessageModule } from '../shared/components/message/message.module';
import { RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { CadastroService } from './cadastro/cadastro.service';
import { NgxMaskModule, IConfig } from 'ngx-mask'

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
    declarations: [LoginComponent, CadastroComponent, HomeComponent],
    imports: [CommonModule, ReactiveFormsModule, FormsModule,
        MessageModule, RouterModule, HomeRoutingModule, NgxMaskModule.forRoot(options)],
    providers: [CadastroService]
})
export class HomeModule { }