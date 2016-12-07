import { Component, Input, Output } from '@angular/core';
import { Router }           from '@angular/router';


@Component({
	selector: 'sidenav-component',
	styleUrls: ['client/assets/css/sidenav/sidenav.css'],
	templateUrl: 'client/app/components/shared/sidenav/sidenav.component.html'
})

export class SidenavComponent {

	@Input() router;
	constructor(private _router: Router) {
		this.router = _router;
	}

	menuSelected(route) {
		return route === this.router.url
	}
}
