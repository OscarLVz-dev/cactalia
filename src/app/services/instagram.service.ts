import { Injectable } from '@angular/core';

declare namespace instgrm {
  namespace Embeds {
    function process(): void;
  }
}

@Injectable()
export class InstagramService {
  public processEmbeddedInstagramPosts(): void {
    if (window['instgrm']) {
      instgrm.Embeds.process()
    }
  }
}
