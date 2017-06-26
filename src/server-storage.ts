/**
 * Created by nickv on 25-6-2017.
 */
export class ServerStorage {
    private _storage : any;

    public constructor(){
        this._storage = {};
    }

    public getItem(key: string) : any {
        if(this._storage.hasOwnProperty(key)) {
            return this._storage.key;
        }else{
            return false;
        }
    }
    
    public removeItem(key: string) : boolean {
        if(this._storage.hasOwnProperty(key)) {
            delete this._storage.key;
            return true;
        }else{
            return false;
        }
    }
    
    public key(index: number) : any {
        return this._storage.key(index);
    }
    
    public clear() {
        this._storage = {};
    }
    
    public setItem(key: string, value: string) : any {
        this._storage[key] = value;
    }
}