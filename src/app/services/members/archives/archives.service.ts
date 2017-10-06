import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArchivesService {

  constructor(private _http: Http) {
  }
  
  archives(): Observable<any> {
    return this._http.get('http://localhost/membership/main/getUsersArchives')
    .map(res => res.json() );
  }

  searchMemberFromArchives(str): Observable<any> {
    return this._http.get('http://localhost/membership/main/searchMemberFromArchives/'+str)
    .map(res => res.json() );
  }
}
