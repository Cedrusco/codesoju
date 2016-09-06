import { provideRouter, RouterConfig }  from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user_profile/user_profile.component';
import { NewsFeedComponent } from './components/newsfeed/newsfeed.component';

const routes: RouterConfig = [
	{
		path: '',
		redirectTo: 'landing',
		pathMatch: 'full'
	},
	{
		path: 'landing',
		component: LandingComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'user_profile',
		component: UserProfileComponent
	},
	{
		path: 'newsfeed',
		component: NewsFeedComponent
	}
];

export const appRouterProviders = [
	provideRouter(routes)
];
