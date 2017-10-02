/* --------------------------------------------
|  ADD & EDIT PAGE
| --------------------------------------------
*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MembersService } from '../../services/members/members.service';

import { ActivatedRoute } from '@angular/router';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-member-manage',
  templateUrl: './member-manage.component.html',
  styleUrls: ['./member-manage.component.css']
})
export class MemberManageComponent implements OnInit {

  constructor(
    private _router: ActivatedRoute,
    private _membersService: MembersService
  ) { }

  ngForm: FormGroup;
  member:string;
  user_firstname:string;
  user_lastname:string;
  idUser:number;
  user_id:string;
  isAdd:boolean;
  userId:number;

  ngOnInit() {

    let userId = this._router.snapshot.params['id'];
    let page = this._router.snapshot.params['page'];
    
    if(page != 'edit'){
      this.isAdd = true
    } else {
      this.isAdd = false;
      let array = this._membersService.getMemberById2(userId)
      .subscribe(data => {
        this.user_firstname = data.firstname,
        this.user_lastname = data.lastname,
        this.idUser = data.id
      });
    }

    //Validate Form
    this.ngForm = new FormGroup({
      user_firstname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ]) ),
      user_lastname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ]) ),
      idUser: new FormControl('')
    })
  }

 onSubmit = function(formData) {
  let page = this._router.snapshot.params['page'];
  
  if(page == 'edit'){
    $('#formMsg').text('member info updated!').delay(5000).fadeOut();
    this._membersService.editUser(formData);
  } else {
      if( (formData.user_firstname && formData.user_lastname) ) {
        this._membersService.addUser(formData);
        $('#formMsg').text('New member added!').delay(5000).fadeOut();
      }
    }
  }

}
