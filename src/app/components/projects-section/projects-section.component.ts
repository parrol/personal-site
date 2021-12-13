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
      liveLink: 'https://cmt-compliance.netlify.app/home'
    },
    {
      title: 'Glow Beauty Aids',
      description: 'Online makeup store developed using Shopify as backend whith a customized Shopify theme as frontend.',
      techUsed: 'Shopify • Liquid • JavaScript',
      repoLink: 'https://github.com/parrol/blockshop-theme-dev-glow-store',
      liveLink: 'https://glowbeautyaids.com/'
    },
    {
      title: `Hero's CRUD`,
      description: `Demo app using Firebase. You Create, Read, Update and Delete heroes using Firebase's realtime database API.`,
      techUsed: 'Angular • Firebase • Bootstrap',
      repoLink: 'https://github.com/parrol/firebase-crud',
      liveLink: 'https://hero-crud-6baf5.firebaseapp.com/heroes'
    },
    {
      title: `Password Manager`,
      description: 'This app started as a ToDo App following an Angular course on Udemy, later on I used that as a starting point for a password manager side project to be showcased as part of my porfolio. ',
      techUsed: 'Angular • Ionic • Capacitor',
      repoLink: 'https://github.com/parrol/Ionic--Angular--Todo-App',
      liveLink: ''
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
