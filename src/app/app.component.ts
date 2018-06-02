import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import * as AuthStore from './auth/auth.store';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private store: Store) {
		store.dispatch(new AuthStore.AuthActions.Login({ username: 'shahid', password: 'ssss' }));
		console.log(store.snapshot());
		setTimeout(() => {
			store.dispatch(new AuthStore.AuthActions.Logout());
		}, 3000);
	}
}
