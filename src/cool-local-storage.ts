import { Injectable } from '@angular/core';
import { CoolStorageBase } from './cool-storage-base';

/**
 * PLATFORM_ID and isPlatformBrowser to determine if the window object exists in current context
 */
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class CoolLocalStorage extends CoolStorageBase {
  constructor(@Inject(PLATFORM_ID) platformId: string) {
      super((isPlatformBrowser(platformId) ? window.localStorage : [], 'LocalStorage');
  }
}