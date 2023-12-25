import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/Skillss/skills/skills.component';
import { ExperienceComponent } from './pages/Skillss/experience/experience.component';
import { EducationComponent } from './pages/Skillss/education/education.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { GestionComponent } from './projects/gestion/gestion.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    GestionComponent,
    ContactComponent,
    CertificateComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
