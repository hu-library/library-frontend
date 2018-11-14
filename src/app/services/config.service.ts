import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  checkMapForAllTrue(map: Map<any, any>) {
    let result = true;
    map.forEach((val) => {
      if (val === false) {
        result = false;
        return;
      }
    });
    return result;
  }

  checkMapForAnyTrue(map: Map<any, any>) {
    let result = false;
    map.forEach((val) => {
      if (val === true) { result = true; return; }
    });
    return result;
  }
}
