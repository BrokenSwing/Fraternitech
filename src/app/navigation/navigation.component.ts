import {Component, OnInit} from '@angular/core';
import {AccountService, ConnectionState} from '../services/account/account.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public accountService: AccountService) {}

  ngOnInit() {
  }

  connect() {
    this.accountService.connect();
  }

  disconnect() {
    this.accountService.disconnect();
  }

  connected() {
    return this.accountService.connectionState === ConnectionState.CONNECTED;
  }

  connecting() {
    return this.accountService.connectionState === ConnectionState.CONNECTING;
  }

  disconnected() {
    return this.accountService.connectionState === ConnectionState.DISCONNECTED;
  }

}
