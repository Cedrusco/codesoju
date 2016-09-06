import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { FooterComponent } from '../shared/footer/footer.component';
import { ToolbarComponent } from '../shared/toolbar/toolbar.component';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';




@Component({
	selector: 'landing-component',
	templateUrl: 'client/app/components/landing/landing.component.html',
	styleUrls: ['client/assets/css/landing/landing.css'],
	directives: [ROUTER_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_SIDENAV_DIRECTIVES, FooterComponent, ToolbarComponent, MdIcon],
	providers: [MdIconRegistry]
})

export class LandingComponent {}
