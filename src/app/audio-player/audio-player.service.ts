import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AudioFile } from './audio-player.model';
@Injectable({
  providedIn: 'root',
})
export class AudioPlayerService {
  audio = new Audio();
  currentIndex = 0;

  private _audioFiles: AudioFile[] = [];

  set audioFiles(files: AudioFile[]) {
    this._audioFiles = files;
  }
  get audioFiles(): AudioFile[] {
    return this._audioFiles;
  }

  get isEnded(): boolean {
    return this.audio.ended;
  }

  constructor() {
    //
  }

  addAudio(files: AudioFile[]) {
    const audioFiles = this.audioFiles;
    return audioFiles.concat(files);
  }

  clearAllAudio() {
    this.audioFiles = [];
  }

  play() {
    this.audio.src = this.audioFiles[this.currentIndex].audio;
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}
