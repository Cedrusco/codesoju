import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProviders }   from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { FORM_PROVIDERS } from '@angular/common';

bootstrap(AppComponent, [
	appRouterProviders, HTTP_PROVIDERS,
	disableDeprecatedForms(),
	provideForms(),
	FORM_PROVIDERS
]);
