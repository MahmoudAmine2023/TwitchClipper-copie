import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../app/app.component';


@Injectable({
  providedIn: 'root'
})
export class TwitchService {

  private baseUrl = 'https://api.twitch.tv/helix/';
  private clientId = environment.twitchClientId;
  private clientSecret = environment.twitchClientSecret;

  constructor() { }

  async getAccessToken() {
    const response = await axios.post('https://id.twitch.tv/oauth2/token', null, {
      params: {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        grant_type: 'client_credentials'
      }
    });
    return response.data.access_token;
  }

  async getClips(broadcasterId: string) {
    const token = await this.getAccessToken();
    const response = await axios.get(`${this.baseUrl}clips`, {
      headers: {
        'Client-ID': this.clientId,
        'Authorization': `Bearer ${token}`
      },
      params: {
        broadcaster_id: broadcasterId
      }
    });
    return response.data.data;
  }


  // Todo rajouter un form
  async getUserId(username: string) {
    const token = await this.getAccessToken();
    const response = await axios.get(`${this.baseUrl}users`/*pas oublier le ' fus*/, {
      headers: {
        'Client-ID': this.clientId,
        'Authorization': `Bearer ${token}`
      },
      params: {
        login: username
      }
    });
    return response.data.data[0].id; // return ton user
  }

}
