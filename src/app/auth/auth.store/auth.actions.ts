export namespace AuthActions {
	export class Login {
		static readonly type = '[Auth] login';
		constructor(public payload: { username: string, password: string }) {
		}
	}

	export class Logout {
		static readonly type = '[Auth] logout';
	}
}