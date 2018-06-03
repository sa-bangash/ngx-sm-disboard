import { State, Selector, Action, StateContext } from '@ngxs/store';
import { AuthModel } from './auth.model';
import { AuthActions } from './auth.actions';
@State<AuthModel>({
	name: 'auth',
	defaults: new AuthModel(),
})
export class AuthState {
	@Selector()
	static token(state: AuthModel) { return state.token; }

	@Action(AuthActions.Login)
	login({ patchState }: StateContext<AuthModel>, payload: AuthActions.Login) {
		console.log(payload);
		patchState({
			username: 'sasoft',
			token: 'ssxdsfwrwejsdflfjs',
		})
	}
	@Action(AuthActions.Logout)
	logout({ setState, getState }: StateContext<AuthModel>) {
		const { token } = getState();
		console.log(token);
		setState({} as AuthModel);
	}

}