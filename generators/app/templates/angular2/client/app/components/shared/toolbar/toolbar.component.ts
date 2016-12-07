import { Component } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'toolbar-component',
	styleUrls: ['client/assets/css/toolbar/toolbar.css'],
	templateUrl: 'client/app/components/shared/toolbar/toolbar.component.html'
})

export class ToolbarComponent {

   @Output() menuClick: EventEmitter<any> = new EventEmitter();

	onMenuClick() {
		this.menuClick.emit(null);
	}
}
