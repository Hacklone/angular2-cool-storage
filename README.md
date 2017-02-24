[npm-url]: https://npmjs.org/package/angular2-cool-storage
[npm-image]: https://img.shields.io/npm/v/angular2-cool-storage.svg
[downloads-image]: https://img.shields.io/npm/dm/angular2-cool-storage.svg
[total-downloads-image]: https://img.shields.io/npm/dt/angular2-cool-storage.svg

# angular2-cool-storage [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]  [![Total Downloads][total-downloads-image]][npm-url]
Cool angular2 wrapper for LocalStorage and SessionStorage

## Install 
> npm install --save angular2-cool-storage

## Setup
```javascript
import { NgModule } from '@angular/core';
import { CoolStorageModule } from 'angular2-cool-storage';

@NgModule({
    imports: [CoolStorageModule.forRoot()]
})
export class MyAppModule {}
```

## Features
- getItem(key)
- setItem(key, value)
- removeItem(key)
- length
- clear()
- key(index)
- itemSetObservable
- itemRemovedObservable
- getObject<T>(key)
- tryGetObject<T>(key)
- setObject(key, value)

```javascript
import { Component, OnInit } from '@angular/core';

import { CoolLocalStorage } from 'angular2-cool-storage';

@Component({
  selector: 'my-app'
})
export class AppComponent implements OnInit { 
    localStorage: CoolLocalStorage;
    
    constructor(localStorage: CoolLocalStorage) {
        this.localStorage = localStorage;   
    }
    
    ngOnInit() {
        this.localStorage.setItem('itemKey', 'itemValue');
        
        console.log(this.localStorage.getItem('itemKey'));
        
        this.localStorage.setObject('itemKey', {
            someObject: 3
        });
        
        console.log(this.localStorage.getObject('itemKey'));
    }
}
```

# License
> The MIT License (MIT)

> Copyright (c) 2016 Hacklone
> https://github.com/Hacklone

> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.