import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MembersService {

  constructor(
    private _http: Http
  ) {}
  
  getMembers() {
    return this._http.get('http://localhost/membership/main/getUsers')
      .map(response => response.json() );
  }

  getMemberById(id) {
    return this._http.get('http://localhost/membership/main/getUserById/'+id)
    .map(res => res.json() );
  }

  getMemberById2(id) {
    return this._http.get('http://localhost/membership/main/getUserById2/'+id)
    .map(res => res.json() );
  }

  addUser(data) {
    return this._http.post('http://localhost/membership/main/addUser/', data)
    .subscribe(data => data);
  }

  editUser(data) {
    return this._http.post('http://localhost/membership/main/editUser', data)
    .subscribe(data => data);
  }

  deleteUser(data) {
    return this._http.post('http://localhost/membership/main/deleteUser', data)
    .subscribe(data => data);
  }
}
