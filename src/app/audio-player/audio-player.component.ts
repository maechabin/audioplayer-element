import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange, Input, Output, EventEmitter } from '@angular/core';
import { AudioPlayerService } from './audio-player.service';
import { AudioFile } from './audio-player.model';

@Component({
  selector: 'app-audioplayer',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
})
export class AudioPlayerComponent implements OnInit, OnChanges {
  @Input() files: string[];

  isEnded = this.audioPlayerService.isEnded;

  constructor(private audioPlayerService: AudioPlayerService) {}

  ngOnInit() {
    //
  }

  ngOnChanges(changes: SimpleChanges) {
    // まずは必ずJSONが来るものとして実装
    const passedFiles: SimpleChange = changes.files;
    const files: AudioFile[] = JSON.parse(passedFiles.currentValue);
    this.audioPlayerService.audioFiles = files;
  }

  handlePlayButton() {
    this.audioPlayerService.play();
    this.isEnded = this.audioPlayerService.isEnded;
  }

  handlePauseButton() {
    this.audioPlayerService.pause();
    this.isEnded = this.audioPlayerService.isEnded;
  }

  handleStopButton() {
    this.audioPlayerService.stop();
    this.isEnded = this.audioPlayerService.isEnded;
  }
}
