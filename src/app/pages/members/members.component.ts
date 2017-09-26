import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../services/members/members.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(
    private _router: ActivatedRoute,
    private _membersService: MembersService
  ){ }

  activePage:number;

  ngOnInit() {
    let page = this._router.snapshot.params['page'];
    let param = this._router.snapshot.params['param'];

    if (param == 'add') {
      this.activePage = 2;
      console.log(param);
    } else {
      if(page == 'edit') {
        let id = this._router.snapshot.params['id'];
        id ? this.activePage = 2 : console.log('page not found');
      } else {
        let ID = this._router.snapshot.params['param'];
        ID ? this.activePage = 4 : this.activePage = 5;
      }
    }
  }

 

}
