import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { StudenstlistComponent } from './studenstlist/studenstlist.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { AddstudentComponent } from './addstudent/addstudent.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'students', component:StudenstlistComponent },
  { path: 'deletestudent', component: DeletestudentComponent },
  { path: 'updatestudent/:id', component: UpdatestudentComponent },
  { path: 'addstudent', component: AddstudentComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
