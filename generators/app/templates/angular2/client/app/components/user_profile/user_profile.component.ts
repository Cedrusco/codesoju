import { Component, Input, Output } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { SidenavComponent } from '../shared/sidenav/sidenav.component';
import { ToolbarComponent } from '../shared/toolbar/toolbar.component';

@Component({
	selector: 'user_profile',
	styleUrls: ['client/assets/css/user_profile/user_profile.css'],
	templateUrl: 'client/app/components/user_profile/user_profile.component.html'
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
