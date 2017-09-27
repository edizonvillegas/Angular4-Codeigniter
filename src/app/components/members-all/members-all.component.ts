import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../services/members/members.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { SetStatusPipe } from '../../pipes/status/set-status.pipe';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-members-all',
  templateUrl: './members-all.component.html',
  styleUrls: ['./members-all.component.css']
})
export class MembersAllComponent implements OnInit {

  constructor(
    private _membersService: MembersService,
    private _router: ActivatedRoute,
    private _setStatus: SetStatusPipe
  ){ }

  members;
  myGroup;
  searchText;

  ngOnInit() {

    this.myGroup = new FormGroup({
      searchText: new FormControl('')
    })

    let page = this._router.snapshot.params['page'];
    if (page != 'edit') {
      this._membersService.getMembers().subscribe(data => {this.members = data});
    }
  }

  delete(id) {
    this._membersService.deleteUser(id);
    var countTr = $('tr:not([style])').length - 1;
    $("body").click(function(event){
      if (countTr == 1) {
        $('table').hide("slow", function() {
          $('#deleteMsg').text('No Member');
        });
      }
      $(event.target).parents('tr').hide();
      $('#deleteMsg').text('member with id # '+id+' moved to archived!').delay(5000).fadeOut();
    });
  }

  search(str) {
    this._membersService.searchMember(str.searchText).subscribe(data => {this.members = data});
  }

}
