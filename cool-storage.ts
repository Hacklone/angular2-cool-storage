import { CoolLocalStorage } from "./src/cool-local-storage";
export { CoolLocalStorage } from "./src/cool-local-storage";
import { CoolSessionStorage } from "./src/cool-session-storage";
export { CoolSessionStorage } from "./src/cool-session-storage";

export const COOL_STORAGE_PROVIDERS: any[] = [
    CoolLocalStorage,
    CoolSessionStorage    
];