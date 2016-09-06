import { Component } from '@angular/core';
import { LandingComponent } from './components/landing/landing.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'my-app',
	directives: [ROUTER_DIRECTIVES],
	template: `
	<landing-component></landing-component>
	<router-outlet></router-outlet>
	`
})
export class AppComponent { }
