import { NgModule } from '@angular/core';

import { CoolLocalStorage } from "./src/cool-local-storage";
export { CoolLocalStorage } from "./src/cool-local-storage";
import { CoolSessionStorage } from "./src/cool-session-storage";
export { CoolSessionStorage } from "./src/cool-session-storage";

@NgModule({
    providers: [CoolLocalStorage, CoolSessionStorage]
})
export class CoolStorageModule {}