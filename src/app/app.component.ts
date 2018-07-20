import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AudioPlayerComponent } from './audio-player/audio-player.component';

@Component({
  selector: 'app-audioplayer',
  template: ``,
})
export class AppComponent {
  constructor(private injector: Injector) {
    const AudioPlayerElement = createCustomElement(AudioPlayerComponent, {
      injector: this.injector,
    });
    customElements.define('app-audioplayer', AudioPlayerElement);
  }
}
