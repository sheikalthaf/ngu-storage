import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable()
export class NguStorageService {
  constructor() {}

  get<T = any>(key: any): Observable<T> {
    return of(null);
  }

  set(
    key:
      | string
      | number
      | IDBKeyRange
      | Date
      | ArrayBufferView
      | ArrayBuffer
      | IDBArrayKey,
    val: any
  ) {
    return of(null);
  }

  delete(
    key:
      | string
      | number
      | IDBKeyRange
      | Date
      | ArrayBufferView
      | ArrayBuffer
      | IDBArrayKey
  ) {
    return of(this.void());
  }

  clear() {
    return of(this.void());
  }

  keys() {
    return of([] as string[]);
  }

  private void() {}
}
