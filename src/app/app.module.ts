import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { CommunityComponent } from './components/community/community.component';
import { HowtobuyComponent } from './components/howtobuy/howtobuy.component';
import { DidyouknowComponent } from './components/didyouknow/didyouknow.component';
import { GoalComponent } from './components/goal/goal.component';
import { GamesComponent } from './components/games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    RoadmapComponent,
    QuestionsComponent,
    MetricsComponent,
    CommunityComponent,
    HowtobuyComponent,
    DidyouknowComponent,
    GoalComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    NgxPageScrollCoreModule.forRoot({duration: 950, scrollOffset: 75}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
