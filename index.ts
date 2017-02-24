import {NgModule, ModuleWithProviders} from '@angular/core';

import { CoolLocalStorage } from './src/cool-local-storage';
export { CoolLocalStorage } from './src/cool-local-storage';
import { CoolSessionStorage } from './src/cool-session-storage';
export { CoolSessionStorage } from './src/cool-session-storage';
export { StorageChangeArguments } from './src/storage-change-arguments.interface';

@NgModule({
  providers: []
})
export class CoolStorageModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoolStorageModule,
      providers: [
        CoolLocalStorage, CoolSessionStorage
      ]
    };
  }
}