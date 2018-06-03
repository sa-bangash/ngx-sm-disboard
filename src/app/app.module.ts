import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// ngxs
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthState } from './auth/auth.store/auth.state';
import { DisboardModule } from './disboard/disboard.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		NgxsModule.forRoot([AuthState]),
		NgxsReduxDevtoolsPluginModule.forRoot(),
		NgxsRouterPluginModule.forRoot(),
		AppRoutingModule,
		DisboardModule,
		AuthModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
