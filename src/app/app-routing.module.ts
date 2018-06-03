import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisboardComponent } from './disboard/disboard.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
	{
		path: 'disboard',
		component: DisboardComponent,
	},
	{
		path: 'login',
		component: AuthComponent,
	}
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}