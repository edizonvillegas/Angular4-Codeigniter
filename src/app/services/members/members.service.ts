import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MembersService {

  constructor(private _http: Http) {
  }
  
  getMembers(): Observable<any> {
    return this._http.get('http://localhost/membership/main/getUsers')
      .map(response => response.json() );
  }

  getMemberById(id:number): Observable<any> {
    return this._http.get('http://localhost/membership/main/getUserById/'+id)
    .map(res => res.json() );
  }

  getMemberById2(id:number) {
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

  login(data:string) {
    return this._http.post('http://localhost/membership/main/login', data);
  }

  searchMember(str): Observable<any[]> {
    return this._http.get('http://localhost/membership/main/searchMember/'+str)
    .map(res => res.json() );
  }
  
}
