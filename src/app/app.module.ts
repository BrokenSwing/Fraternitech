import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FooterComponent} from './footer/footer.component';

import {SocialLoginModule, AuthServiceConfig} from 'angularx-social-login';
import {FacebookLoginProvider} from 'angularx-social-login';
import {HomeComponent} from './pages/home/home.component';
import {ScoreboardComponent} from './pages/scoreboard/scoreboard.component';
import {BabiesComponent} from './pages/babies/babies.component';
import {FormsModule} from '@angular/forms';
import {TimeGuard} from './time.guard';
import { PolicyComponent } from './pages/policy/policy.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TrombinoscopeComponent } from './pages/trombinoscope/trombinoscope.component';
import { RandomComponent } from './pages/random/random.component';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('286354825532260', {scope: 'public_profile'}, 'fr_FR')
  }
]);

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'scoreboard', component: ScoreboardComponent},
  {path: 'babies', component: BabiesComponent, canActivate: [TimeGuard]},
  {path: 'policy', component: PolicyComponent},
  {path: 'trombinoscope', component: TrombinoscopeComponent},
  {path: 'random', component: RandomComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    ScoreboardComponent,
    BabiesComponent,
    PolicyComponent,
    NotFoundComponent,
    TrombinoscopeComponent,
    RandomComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: () => config,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
