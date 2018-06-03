import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';
import { AuthState } from './auth.store/auth.state';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';

// angular material
import { NgMaterialModule } from '../ng-material/ng-material.module';

@NgModule({
	imports: [
		CommonModule,
		NgMaterialModule,
	],
	declarations: [AuthComponent, LoginComponent],
	exports: [AuthComponent],
})
export class AuthModule { }
