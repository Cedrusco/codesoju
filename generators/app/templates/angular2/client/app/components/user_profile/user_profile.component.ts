import { Component, Input, Output } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { FooterComponent } from '../shared/footer/footer.component';
import { SidenavComponent } from '../shared/sidenav/sidenav.component';
import { ToolbarComponent } from '../shared/toolbar/toolbar.component';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
	selector: 'user_profile',
	styleUrls: ['client/assets/css/user_profile/user_profile.css'],
	templateUrl: 'client/app/components/user_profile/user_profile.component.html',
	directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, FooterComponent, SidenavComponent, ToolbarComponent, MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES]
})
export class UserProfileComponent { 
	user: {
		firstname: string
		lastname: string
		addressLine1: string
		addressLine2: string
		addressCity: string
		addressState: string
		addressZip: string
	} = {
		firstname: '',
		lastname: '',
		addressLine1: '',
		addressLine2: '',
		addressCity: '',
		addressState: '',
		addressZip: ''
	}
	constructor() {}
}
