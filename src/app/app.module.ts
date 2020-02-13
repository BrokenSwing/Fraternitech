import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AllosComponent } from './allos/allos.component';

import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('286354825532260', { scope: 'public_profile' }, 'fr_FR')
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    AllosComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SocialLoginModule,
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: () => config,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
