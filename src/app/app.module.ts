import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SiteUnderConstructionComponent } from './components/site-under-construction/site-under-construction.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SiteUnderConstructionComponent,
    ProjectComponent,
    ProjectsSectionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
