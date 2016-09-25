export abstract class CoolStorageBase {
    private storageObject: any;

    constructor(storageObject: any, storageObjectName: string) {
        if (!storageObject) {
            throw new Error(`Current browser does not support ${ storageObjectName }`);
        }
        
        this.storageObject = storageObject;
    }
    
    getItem(key: string): string {
        return this.storageObject.getItem(key) || null;
    }

    setItem(key: string, value: string): void {
        this.storageObject.setItem(key, value);
    }  
    
    removeItem(key: string): void {
        this.storageObject.removeItem(key);
    }
    
    key(index: number): string {
        return this.storageObject.key(index);
    }
    
    clear(): void {
        this.storageObject.clear();
    }
    
    get length(): number {
        return this.storageObject.length;
    }
    
    getObject(key: string): any {
        let jsonInStorage = this.getItem(key);
        
        if(jsonInStorage === null) {
            return null;
        }
    
        return JSON.parse(jsonInStorage);
    }  

    setObject(key: string, value: any): void {
        this.setItem(key, JSON.stringify(value));
    }
}