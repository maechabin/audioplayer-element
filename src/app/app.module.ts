import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';

@NgModule({
  declarations: [AppComponent, AudioPlayerComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  entryComponents: [AudioPlayerComponent],
})
export class AppModule {}
