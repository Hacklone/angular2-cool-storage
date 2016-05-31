import { Injectable } from '@angular/core';
import { CoolStorageBase } from './cool-storage-base'

@Injectable()
export class CoolLocalStorage extends CoolStorageBase {
    constructor() {
        super(window.localStorage, 'LocalStorage');
    }
}