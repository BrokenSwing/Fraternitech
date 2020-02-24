import { Injectable } from '@angular/core';

import {AuthService, SocialUser} from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private user: SocialUser;
  private decodedToken: UserInfo = null;
  private token = '';
  connectionState: ConnectionState;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.connectionState = ConnectionState.CONNECTING;
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (user != null) {
        this.http.get('/api/account', {
          params: {
            token: user.authToken,
          },
          observe: 'response',
        }).subscribe((res) => {
          if (res.ok) {
            this.token = (res.body as any).token;
            const tokenContent = this.token.substring(this.token.indexOf('.') + 1, this.token.lastIndexOf('.'));
            this.decodedToken = JSON.parse(atob(tokenContent)) as UserInfo;
            this.connectionState = ConnectionState.CONNECTED;
            console.log(this.decodedToken);
          }
        }, (error) => {
          this.connectionState = ConnectionState.DISCONNECTED;
        });
      } else {
        this.connectionState = ConnectionState.DISCONNECTED;
      }
    });
  }

  isAdmin() {
    return this.decodedToken != null && this.decodedToken.admin;
  }

  connect() {
    this.connectionState = ConnectionState.CONNECTING;
    setTimeout(() => {
      if (this.connectionState === ConnectionState.CONNECTING) {
        this.connectionState = ConnectionState.DISCONNECTED;
      }
    }, 4000);
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  disconnect() {
    this.connectionState = ConnectionState.DISCONNECTED;
    this.authService.signOut();
  }

}

export enum ConnectionState {
  CONNECTED,
  CONNECTING,
  DISCONNECTED
}

export class UserInfo {
  userId: string;
  firstName: string;
  lastName: string;
  admin: boolean;
}
