import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';
import { AuthState } from './auth.store/auth.state';
import { AuthComponent } from './auth.component';
@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [AuthComponent],
	exports: [AuthComponent],
})
export class AuthModule { }
