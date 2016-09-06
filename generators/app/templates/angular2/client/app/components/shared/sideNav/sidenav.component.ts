import { Component, Input, Output } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router }           from '@angular/router';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';


@Component({
	selector: 'sidenav-component',
	styleUrls: ['client/assets/css/sidenav/sidenav.css'],
	templateUrl: 'client/app/components/shared/sidenav/sidenav.component.html',
	directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MdIcon],
	providers: [MdIconRegistry]
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
