import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { appRouterProviders } from './app.routes';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
