import { Component } from '@angular/core';
import { AudioPlayerService } from './audio-player.service';

@Component({
  selector: 'app-audioplayer',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
})
export class AudioPlayerComponent {
  constructor(private audioPlayerService: AudioPlayerService) {}
  handleStopButton() {
    this.audioPlayerService.stop();
  }

  handlePlayButton() {
    this.audioPlayerService.play();
  }
}
