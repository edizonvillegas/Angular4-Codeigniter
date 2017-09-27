import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MembersService } from '../../services/members/members.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private _membersService: MembersService,
    private _router: Router
  ) {
    let loginSessId = localStorage.getItem('loginSessId');
    if (loginSessId) {
      this._router.navigate(['/members']);
    }
  }

  loginForm;

  ngOnInit() {
    this.loginForm = new FormGroup({
      acct_username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      acct_password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    })
  }
  
  onSubmit = function(formData) {
    this._membersService.login(formData).subscribe((response) => {
      if(response.text() ) {
        localStorage.setItem('loginSessId', formData.acct_username);
        this._router.navigate(['/']);
      }
    },
      (err) => console.log(err)
    );
  }

  logout() {
    localStorage.removeItem('loginSessId');
    this._router.navigate(['/auth']);
  }

}
