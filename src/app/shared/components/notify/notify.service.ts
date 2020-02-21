import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notify, NotifyType } from './notify';

@Injectable({ providedIn: 'root' })
export class NotifyService {

    notifySubject: Subject<Notify> = new Subject<Notify>();

    success(message: string) {
        this.notify(NotifyType.SUCCESS, message)
    }

    warning(message: string) {
        this.notify(NotifyType.WARNING, message);
    }

    danger(message: string) {
        this.notify(NotifyType.DANGER, message);
    }

    info(message: string) {
        this.notify(NotifyType.INFO, message);
    }

    private notify(notifyType: NotifyType, message: string) {
        this.notifySubject.next(new Notify(notifyType, message));
    }

    getAlert() {
        return this.notifySubject.asObservable();
    }

}