import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SectionHeadComponent } from './section-head/section-head.component';
import { SkillComponent } from './skill/skill.component';
import { EducationComponent } from './education/education.component';
import { AchievementComponent } from './achievement/achievement.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    NavbarComponent,
    IntroComponent,
    AboutmeComponent,
    SectionHeadComponent,
    SkillComponent,
    EducationComponent,
    AchievementComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
