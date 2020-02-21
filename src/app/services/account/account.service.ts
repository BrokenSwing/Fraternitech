import { Injectable } from '@angular/core';

import {AuthService, SocialUser} from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private user: SocialUser;
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
            this.connectionState = ConnectionState.CONNECTED;
          }
        }, (error) => {
          this.connectionState = ConnectionState.DISCONNECTED;
        });
      } else {
        this.connectionState = ConnectionState.DISCONNECTED;
      }
    });
  }

  connect() {
    this.connectionState = ConnectionState.CONNECTING;
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
