import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParcoursListComponent } from './parcours/list/parcours-list.component';
import { ParcoursDetailComponent } from './parcours/detail/parcours-detail.component';
import { ParcoursCreateComponent } from './parcours/create/parcours-create.component';
import { QuizComponent } from './quiz/quiz.component';
import { StatsComponent } from './stats/stats.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'parcours', component: ParcoursListComponent, canActivate: [AuthGuard] },
  { path: 'parcours/new', component: ParcoursCreateComponent, canActivate: [AuthGuard] },
  { path: 'parcours/:id', component: ParcoursDetailComponent, canActivate: [AuthGuard] },
  { path: 'quiz/:leconId', component: QuizComponent, canActivate: [AuthGuard] },
  { path: 'stats', component: StatsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
