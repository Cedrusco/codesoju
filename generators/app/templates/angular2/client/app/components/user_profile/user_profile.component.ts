import { Component, Input, Output } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { FooterComponent } from '../shared/footer/footer.component';
import { SidenavComponent } from '../shared/sidenav/sidenav.component';
import { ToolbarComponent } from '../shared/toolbar/toolbar.component';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'user_profile',
  styleUrls: ['client/assets/css/user_profile/user_profile.css'],
  templateUrl: 'client/app/components/user_profile/user_profile.component.html',
  directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MdIcon, FooterComponent, SidenavComponent, ToolbarComponent, MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, FormGroup, FormControl],
  providers: [MdIconRegistry]
})
export class UserProfileComponent { 
	resources = [
    {id: 1, name: 'toto1'},
    {id: 2, name: 'toto2'},
    {id: 3, name: 'toto3'},
    {id: 4, name: 'toto4'},
    {id: 5, name: 'toto5'},
    {id: 6, name: 'toto6'}
  ];


  myForm = new FormGroup({
    first: new FormControl('', Validators.required),
    last: new FormControl('Drew', [ Validators.required, Validators.minLength(3)]),
    date: new FormControl(undefined, [ Validators.required]),
    managerId: new FormControl(3, [ Validators.required]),
    manager: new FormControl(this.resources[3], [ Validators.required])
  });
}
