import { Component } from '@angular/core';
import { SidenavComponent } from '../shared/sidenav/sidenav.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ToolbarComponent } from '../shared/toolbar/toolbar.component';
import { NewsFeedService } from './newsfeed.service';
import { Observable } from 'rxjs/Rx';




@Component({
	selector: 'newsfeed-component',
	templateUrl: 'client/app/components/newsfeed/newsfeed.component.html',
	styleUrls: ['client/assets/css/newsfeed/newsfeed.css'],
	providers: [ NewsFeedService]
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
