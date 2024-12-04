import { Component, OnInit } from '@angular/core';
import { TwitchService } from '../twitch.service';

@Component({
  selector: 'app-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.css']
})
export class ClipsComponent implements OnInit {
  clips: any[] = [];
  broadcasterId = '71092938'; //

  constructor(private twitchService: TwitchService) {}

  ngOnInit() {
    this.fetchClips();
    this.testBroadcaster();
  }

  async testBroadcaster() {
    try {
      const broadcasterId = await this.twitchService.getUserId("xqc");
      console.log(broadcasterId);
    } catch (error) {
      console.error('Error fetching broadcaster ID:', error);
    }
  }


  async fetchClips() {
    this.clips = await this.twitchService.getClips(this.broadcasterId);
  }

}
