import { Observable, Subject } from 'rxjs';
import { StorageChangeArguments } from './storage-change-arguments.interface';

export abstract class CoolStorageBase {
  private _storageObject: any;
  private _itemSetSubject: Subject<StorageChangeArguments>;
  private _itemRemovedSubject: Subject<StorageChangeArguments>;

  constructor(storageObject: any, storageObjectName: string) {
    if (!storageObject) {
      throw new Error(`Current browser does not support ${ storageObjectName }`);
    }

    this._storageObject = storageObject;

    this._itemSetSubject = new Subject<StorageChangeArguments>();
    this._itemRemovedSubject = new Subject<StorageChangeArguments>();
  }

  public get itemSetObservable(): Observable<StorageChangeArguments> {
    return this._itemSetSubject.asObservable();
  }

  public get itemRemovedObservable(): Observable<StorageChangeArguments> {
    return this._itemRemovedSubject.asObservable();
  }

  public getItem(key: string): string {
    return this._storageObject.getItem(key) || null;
  }

  public setItem(key: string, value: string): void {
    this._itemSetSubject.next({
      key,
      value
    });

    this._setItemInStorage(key, value);
  }

  public removeItem(key: string): void {
    let currentValue = this.tryGetObject(key);

    if (!currentValue) {
      currentValue = this.getItem(key);
    }

    this._itemRemovedSubject.next({
      key,
      value: currentValue
    });

    this._storageObject.removeItem(key);
  }

  public key(index: number): string {
    return this._storageObject.key(index);
  }

  public clear(): void {
    this._storageObject.clear();
  }

  public get length(): number {
    return this._storageObject.length;
  }

  public getObject<T>(key: string): T {
    let jsonInStorage = this.getItem(key);

    if (jsonInStorage === null) {
      return null;
    }

    return JSON.parse(jsonInStorage) as T;
  }

  public tryGetObject<T>(key: string): T {
    try {
      return this.getObject<T>(key);
    } catch (e) {
      return null;
    }
  }

  public setObject(key: string, value: any): void {
    this._itemSetSubject.next({
      key,
      value
    });

    this._setItemInStorage(key, JSON.stringify(value));
  }

  private _setItemInStorage(key: string, value: string) {
    this._storageObject.setItem(key, value);
  }
}