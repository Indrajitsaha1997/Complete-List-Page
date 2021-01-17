import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map,catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  hostUrl: any;
  constructor(private http: HttpClient) {
    this.hostUrl = environment.hostUrl;
   }

   getUserList(){
    return this.http.get(this.hostUrl + 'users?order=desc&max=10&sort=reputation&site=stackoverflow');
  }
  getUserById(id) {
    return this.http.get(this.hostUrl + 'users/'+id+'?order=desc&sort=reputation&site=stackoverflow').pipe(map((ret: Response) => {
      return ret;
    }));
  }
  sortChar(array, attribute, desc, type?) {
    //console.log("type", type)
    if (type == undefined) {
      type = "string";
    }
    if (type == "string") {
      array = this.sortString(array, attribute, desc);
    }
    if (type === 'date' || type === 'multiDate') {
      array = this.sortDate(array, attribute, desc);
    }
    if (type === 'number' && !isNaN(Number(array[attribute]))) {
      array = this.sortNumber(array, attribute, desc);
    }

    return array;
  }
  sortString(array, attribute, desc) {
    if (desc) {
      return array.sort(function (a, b) {
        if (!a[attribute]) {
          a[attribute] = '.';
        }
        if (!b[attribute]) {
          b[attribute] = '.';
        }
        if (a[attribute] < b[attribute]) { return 1; }
        if (a[attribute] > b[attribute]) { return -1; }
        return 0;
      })
    } else {
      return array.sort(function (a, b) {
        if (!a[attribute]) {
          a[attribute] = '.';
        }
        if (!b[attribute]) {
          b[attribute] = '.';
        }
        if (a[attribute] < b[attribute]) { return -1; }
        if (a[attribute] > b[attribute]) { return 1; }
        return 0;
      })
    }
  }

  sortDate(array, attribute, desc) {
    if (desc) {
      return array.sort(function (a, b) {

        if (!a[attribute]) {
          a[attribute] = '1970-01-01 00:00:00';
        }
        if (!b[attribute]) {
          b[attribute] = '1970-01-01 00:00:00';
        }
        const date1Str = a[attribute].split("/").reverse().join("/");
        const date1 = new Date(date1Str);
        const date2Str = b[attribute].split("/").reverse().join("/");
        const date2 = new Date(date2Str);
        if (date1.getTime() > date2.getTime()) {
          return -1;
        }
        else if (date1.getTime() < date2.getTime()) {
          return 1;
        }
        else {
          return 0;
        }
      })
    } else {
      return array.sort(function (a, b) {
        if (!a[attribute]) {
          a[attribute] = '1970-01-01 00:00:00';
        }
        if (!b[attribute]) {
          b[attribute] = '1970-01-01 00:00:00';
        }
        const date1Str = a[attribute].split("/").reverse().join("/");
        const date1 = new Date(date1Str);
        const date2Str = b[attribute].split("/").reverse().join("/");
        const date2 = new Date(date2Str);
        if (date1.getTime() > date2.getTime()) {
          return 1;
        }
        else if (date1.getTime() < date2.getTime()) {
          return -1;
        }
        else {
          return 0;
        }
      })
    }
  }

  sortNumber(array, attribute, desc) {
    if (desc) {
      return array.sort(function (a, b) {
        if (!a[attribute]) {
          a[attribute] = 0;
        }
        if (!b[attribute]) {
          b[attribute] = 0;
        }
        if (Number(a[attribute]) < Number(b[attribute])) { return 1; }
        if (Number(a[attribute]) > Number(b[attribute])) { return -1; }
        return 0;
      })
    } else {
      return array.sort(function (a, b) {
        if (!a[attribute]) {
          a[attribute] = 0;
        }
        if (!b[attribute]) {
          b[attribute] = 0;
        }
        if (Number(a[attribute]) < Number(b[attribute])) { return -1; }
        if (Number(a[attribute]) > Number(b[attribute])) { return 1; }
        return 0;
      })
    }
  }
}
