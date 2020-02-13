import { Component, OnInit } from '@angular/core';
import {AuthService, SocialUser} from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  loggedIn = false;
  user: SocialUser = null;

  constructor(private authService: AuthService) {
    this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = user != null;
    });
  }

  ngOnInit() {
  }

  connect() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  disconnect() {
    this.authService.signOut(true);
  }

}
