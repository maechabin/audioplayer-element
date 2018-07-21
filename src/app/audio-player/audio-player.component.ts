import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AudioPlayerService } from './audio-player.service';

@Component({
  selector: 'app-audioplayer',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
})
export class AudioPlayerComponent implements OnInit, OnChanges {
  private _files = new BehaviorSubject(this.files);

  @Input()
  set files(files: string) {
    const filesArray = JSON.parse(files);
    this._files.next(filesArray);
  }

  isEnded = this.audioPlayerService.isEnded;

  constructor(private audioPlayerService: AudioPlayerService) {}

  ngOnInit() {
    // this._files.subscribe(files => {
    //   console.log(files);
    //   this.audioPlayerService.audioFiles = files;
    // });
  }

  ngOnChanges() {}

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
