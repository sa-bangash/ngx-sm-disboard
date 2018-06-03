import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import * as AuthStore from './auth/auth.store';

import { Navigate } from '@ngxs/router-plugin';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private store: Store) {
		store.dispatch(new AuthStore.AuthActions.Login({ username: 'shahid', password: 'ssss' }));

		// setTimeout(() => {
		// 	this.store.dispatch(new Navigate(['/disboard']));
		// }, 3000);
	}
}
