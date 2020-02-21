import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { Router } from '@angular/router';

@Component({
    selector: 'gb-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    users: Observable<User>;

    constructor(private userService: UserService, private router: Router) {
        this.users = userService.getUser();
        console.log(this.users)
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
}