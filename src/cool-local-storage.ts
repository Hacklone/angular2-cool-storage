import {Injectable, Inject} from '@angular/core';
import { CoolStorageBase } from './cool-storage-base';

/**
 * PLATFORM_ID and isPlatformBrowser to determine if the window object exists in current context
 */
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { ServerStorage } from './server-storage';

@Injectable()
export class CoolLocalStorage extends CoolStorageBase {
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
      if(isPlatformBrowser(platformId)) {
          super(window.localStorage, 'LocalStorage');
      }else{
          super(new ServerStorage(), 'LocalStorage')
      }
  }
}