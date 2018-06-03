import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// ngxs
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthState } from './auth/auth.store/auth.state';
import { DisboardModule } from './disboard/disboard.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		NgxsModule.forRoot([AuthState]),
		NgxsReduxDevtoolsPluginModule.forRoot(),
		DisboardModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
