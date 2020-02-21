import { Component, Input } from '@angular/core';

@Component({
    selector: 'gb-message',
    templateUrl: './message.component.html'
})
export class MessageComponent {
    @Input() text = '';
}