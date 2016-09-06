import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NewsFeedService {
	articles: Observable<any>;
	constructor(http:Http) {
	this.articles = http.get('/api/newsfeed')
	  .map(response => response.json());
	}
}