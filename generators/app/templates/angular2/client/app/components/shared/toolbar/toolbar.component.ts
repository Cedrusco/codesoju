import { Component } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { MdToolbar } from '@angular2-material/toolbar';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
// import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';

@Component({
  selector: 'toolbar-component',
  styleUrls: ['client/assets/css/toolbar/toolbar.css'],
  templateUrl: 'client/app/components/shared/toolbar/toolbar.component.html',
  directives: [ROUTER_DIRECTIVES, MD_GRID_LIST_DIRECTIVES, MdToolbar, MdIcon],
  providers: [MdIconRegistry]
})

export class ToolbarComponent {

	// @Output() menuClick = new EventEmitter();
   @Output() menuClick: EventEmitter<any> = new EventEmitter();

  	onMenuClick() {
    	this.menuClick.emit(null);
  	}
}