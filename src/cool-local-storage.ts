import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { CoolStorageBase } from './cool-storage-base';
import { CoolServerStorage } from './cool-server-storage';

@Injectable()
export class CoolLocalStorage extends CoolStorageBase {
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      super(window.localStorage, 'LocalStorage');
    } else {
      super(new CoolServerStorage(), 'LocalStorage');
    }
  }
}