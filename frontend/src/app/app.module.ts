import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParcoursListComponent } from './parcours/list/parcours-list.component';
import { ParcoursDetailComponent } from './parcours/detail/parcours-detail.component';
import { ParcoursCreateComponent } from './parcours/create/parcours-create.component';
import { QuizComponent } from './quiz/quiz.component';
import { StatsComponent } from './stats/stats.component';

// Shared Components
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';
import { GestureNavComponent } from './shared/components/gesture-nav/gesture-nav.component';

// Interceptors & Guards
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ParcoursListComponent,
    ParcoursDetailComponent,
    ParcoursCreateComponent,
    QuizComponent,
    StatsComponent,
    NavbarComponent,
    FooterComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GestureNavComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
