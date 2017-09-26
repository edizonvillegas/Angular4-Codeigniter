import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../services/members/members.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-single',
  templateUrl: './member-single.component.html',
  styleUrls: ['./member-single.component.css']
})
export class MemberSingleComponent implements OnInit {

  constructor(
    private _router: ActivatedRoute,
    private _membersService: MembersService
  ){ }

  activePage:number;
  member:string = '';

  ngOnInit() {
    let userId = this._router.snapshot.params['param'];
    this._membersService.getMemberById(userId)
    .subscribe(data => {
      this.member = data
    });
  }

}
