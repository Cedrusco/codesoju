import { Component } from '@angular/core';
import { LandingComponent } from './components/landing/landing.component';

@Component({
	selector: 'my-app',
	template: `
	<router-outlet></router-outlet>
	`
})
export class AppComponent { }
