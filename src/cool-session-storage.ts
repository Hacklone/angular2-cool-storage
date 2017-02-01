import { Injectable } from '@angular/core';
import { CoolStorageBase } from './cool-storage-base'

@Injectable()
export class CoolSessionStorage extends CoolStorageBase {
  constructor() {
    super(window.sessionStorage, 'SessionStorage');
  }
}