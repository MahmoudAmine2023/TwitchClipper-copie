import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TwitchClipper';
}
export const environment = {
  production: false,
  twitchClientId: 'ton client id mec',
  twitchClientSecret: 'ton twitch client secret'
};
