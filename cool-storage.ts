import { NgModule } from '@angular/core';

import { CoolLocalStorage } from "./src/cool-local-storage";
export { CoolLocalStorage } from "./src/cool-local-storage";
import { CoolSessionStorage } from "./src/cool-session-storage";
export { CoolSessionStorage } from "./src/cool-session-storage";

/* @deprecated */
export const COOL_STORAGE_PROVIDERS: any[] = [
    CoolLocalStorage,
    CoolSessionStorage    
];

@NgModule({
    exports: [CoolLocalStorage, CoolSessionStorage],
    providers: [CoolLocalStorage, CoolSessionStorage]
})
export class CoolStorageModule {}