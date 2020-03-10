import {Injectable} from '@angular/core';

import {AuthService, SocialUser} from 'angularx-social-login';
import {FacebookLoginProvider} from 'angularx-social-login';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private user: SocialUser;
  private decodedToken: UserInfo = null;
  private token = '';
  stateBehavior = new BehaviorSubject(ConnectionState.DISCONNECTED);

  get connectionState() {
    return this.stateBehavior.value;
  }

  constructor(private authService: AuthService, private http: HttpClient) {
    this.stateBehavior.next(ConnectionState.CONNECTING);
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
            this.stateBehavior.next(ConnectionState.CONNECTED);
          } else {
            this.stateBehavior.next(ConnectionState.DISCONNECTED);
          }
        }, (error) => {
          this.stateBehavior.next(ConnectionState.DISCONNECTED);
        });
      } else {
        this.stateBehavior.next(ConnectionState.DISCONNECTED);
      }
    });
  }

  isAdmin() {
    return this.decodedToken != null && this.decodedToken.admin;
  }

  getUserInfo() {
    return this.decodedToken;
  }

  getToken() {
    return this.token;
  }

  connect() {
    this.stateBehavior.next(ConnectionState.CONNECTING);
    setTimeout(() => {
      if (this.connectionState === ConnectionState.CONNECTING) {
        this.stateBehavior.next(ConnectionState.DISCONNECTED);
      }
    }, 4000);
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).catch(() => this.stateBehavior.next(ConnectionState.DISCONNECTED));
  }

  disconnect() {
    this.stateBehavior.next(ConnectionState.DISCONNECTED);
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
