import { NgModule }								from '@angular/core';
import { BrowserModule }					from '@angular/platform-browser';
import { FormsModule }						from '@angular/forms';
import { HttpModule }							from '@angular/http';
import { RouterModule, Routes }		from '@angular/router';

import { MaterialModule }					from '@angular/material';
import {ChartsModule}							from 'ng2-charts/ng2-charts';

import { LandingComponent } 			from './components/landing/landing.component';
import { HomeComponent }					from './components/home/home.component';
import { UserProfileComponent }		from './components/user_profile/user_profile.component';
import { NewsFeedComponent }			from './components/newsfeed/newsfeed.component';

import { FooterComponent }				from './components/shared/footer/footer.component';
import { SidenavComponent }				from './components/shared/sideNav/sidenav.component';
import { ToolbarComponent }				from './components/shared/toolbar/toolbar.component';

const routes: Routes = [
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


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule.forRoot(),
		ChartsModule
  ],
	declarations:[
		LandingComponent,
		HomeComponent,
		UserProfileComponent,
		NewsFeedComponent,
		FooterComponent,
		SidenavComponent,
		ToolbarComponent
	],
  exports: [
    RouterModule
  ]
})

export class appRouterProviders {
}
