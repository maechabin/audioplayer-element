import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioPlayerService {
  audio = new Audio();

  private _audioFiles: string[] = [];

  set audioFiles(files: string[]) {
    this._audioFiles = files;
  }
  get audioFiles(): string[] {
    return this._audioFiles;
  }

  get isEnded(): boolean {
    return this.audio.ended;
  }

  constructor() {
    this.audio.src = 'https://mae.chab.in/wp-content/uploads/music/mm48.mp3';
  }

  addAudio(files: string[]) {
    const audioFiles = this.audioFiles;
    return audioFiles.concat(files);
  }

  clearAllAudio() {
    this.audioFiles = [];
  }

  play() {
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
