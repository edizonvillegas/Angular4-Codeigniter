import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MembersComponent } from './pages/members/members.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { MembersService } from './services/members/members.service';
import { MembersAllComponent } from './components/members-all/members-all.component';
import { MemberManageComponent } from './components/member-manage/member-manage.component';
import { MemberSingleComponent } from './components/member-single/member-single.component';
import { SetStatusPipe } from './pipes/status/set-status.pipe';
import { AuthComponent } from './pages/auth/auth.component';

let routes = [
  { path: '', component: DashboardComponent },
  { path: 'members', component: MembersComponent },
  { path: 'members/:param', component: MembersComponent },
  { path: 'members/:page/:id', component: MembersComponent },
  { path: 'auth', component: AuthComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MembersComponent,
    DashboardComponent,
    MembersAllComponent,
    MemberManageComponent,
    MemberSingleComponent,
    SetStatusPipe,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MembersService, SetStatusPipe, AuthComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
