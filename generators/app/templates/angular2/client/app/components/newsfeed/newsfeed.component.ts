import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { SidenavComponent } from '../shared/sidenav/sidenav.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ToolbarComponent } from '../shared/toolbar/toolbar.component';
import { NewsFeedService } from './newsfeed.service';
import {Observable} from 'rxjs/Rx';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';




@Component({
  selector: 'newsfeed-component',
  templateUrl: 'client/app/components/newsfeed/newsfeed.component.html',
  styleUrls: ['client/assets/css/newsfeed/newsfeed.css'],
  directives: [ROUTER_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_SIDENAV_DIRECTIVES, FooterComponent, ToolbarComponent, MdIcon, SidenavComponent, MD_CARD_DIRECTIVES],
  providers: [MdIconRegistry, NewsFeedService]
})

export class NewsFeedComponent {
	articles: Observable<any>;
	constructor(newsFeedService:NewsFeedService) {
	  newsFeedService.articles
	    .subscribe(
	      articles => this.articles = articles,
	      error => console.error('Error: ' + error),
	      () => console.log('Completed!', this.articles)
	    );
	}
}