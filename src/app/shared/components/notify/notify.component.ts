import { Component, Input } from '@angular/core';
import { NotifyService } from './notify.service';
import { Notify, NotifyType } from './notify';

@Component({
    selector: 'gb-notify',
    templateUrl: './notify.component.html'
})
export class NotifyComponent {

    @Input() timeout = 1500;
    notifys: Notify[] = [];

    constructor(private notifyService: NotifyService) {
        this.notifyService.getAlert()
            .subscribe(notify => {
                if (!notify) {
                    this.notifys = [];
                    return;
                }
                this.notifys.push(notify)
                setTimeout(() => this.removeNotify(notify), this.timeout)
            });

    }
    removeNotify(notifyToRemove: Notify) {
        this.notifys = this.notifys.filter(notify => notify != notifyToRemove);
    }

    getNotifyClass(notify: Notify) {
        if (!notify) {
            return '';
        }
        console.log("CAINDO AQUI:", notify)
        switch (notify.notifyType) {
            case NotifyType.DANGER:
                return 'notification is-danger';
            case NotifyType.SUCCESS:
                return 'notification is-success';
            case NotifyType.INFO:
                return 'notification is-info';
            case NotifyType.WARNING:
                return 'notification is-warning';
        }
    }
}