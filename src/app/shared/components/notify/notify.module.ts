import { NgModule } from '@angular/core';
import { NotifyComponent } from './notify.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [NotifyComponent],
    exports: [NotifyComponent],
    imports: [CommonModule]
})
export class NotifyModule { }