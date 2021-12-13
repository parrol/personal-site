import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent implements OnInit {

  projects: ProjectModel[] = [
    {
      title: 'CM Technologies',
      description: 'Landing Page as well as a SPA with login, sign up and password reset flows to use a paid product that reads from a dynamically created database. ',
      techUsed: 'Angular Universal (SSR) • Angular Material',
      repoLink: '',
      liveLink: 'https://cmt-compliance.netlify.app/home',
      status: 'Finished'
    },
    {
      title: 'Glow Beauty Aids',
      description: 'Online makeup store developed using Shopify as backend whith a customized Shopify theme as frontend.',
      techUsed: 'Shopify • Liquid • JavaScript',
      repoLink: 'https://github.com/parrol/blockshop-theme-dev-glow-store',
      liveLink: 'https://glowbeautyaids.com/',
      status: 'Finished'
    },
    {
      title: `Hero's CRUD`,
      description: `Demo app using Firebase. You Create, Read, Update and Delete heroes using Firebase's realtime database API.`,
      techUsed: 'Angular • Firebase • Bootstrap',
      repoLink: 'https://github.com/parrol/firebase-crud',
      liveLink: 'https://hero-crud-6baf5.firebaseapp.com/heroes',
      status: 'Demo'
    },
    {
      title: `Password Manager`,
      description: 'Todo and Password Manager app built with Angular and Ionic.',
      techUsed: 'Angular • Ionic • Capacitor',
      repoLink: 'https://github.com/parrol/Ionic--Angular--Todo-App',
      liveLink: 'https://pass-mngr.netlify.app/',
      status: 'Ongoing'
    },
    {
      title: `Personal Site`,
      description: `This website you're in at the moment. I decided to use Angular because eventually there's going to be dynamic data retrieved from a database.`,
      techUsed: 'Angular Universal',
      repoLink: 'https://github.com/parrol/personal-site',
      liveLink: '',
      status: 'Ongoing'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
