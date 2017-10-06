import { Component, OnInit } from '@angular/core';
import { ArchivesService } from '../../../services/members/archives/archives.service';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {

  public keyUp = new Subject<any>();

  constructor(
    private _archivesService : ArchivesService) {
    const subscription = this.keyUp
    .map(event => event.target.value)
    .debounceTime(500)
    .distinctUntilChanged()
    .flatMap(search => Observable.of(search).delay(500))
    .subscribe(data => {
      this.searchArchives(data)
    });
  }

  public archives$: Observable<any[]>;

  ngOnInit() {
    this.archives$ = this._archivesService.archives();
  }

  searchArchives(str) {
    if(str.length > 0){
      this.archives$ = this._archivesService.searchMemberFromArchives(str);
    } else {
      this.archives$ = this._archivesService.archives();
    }
  }

}
