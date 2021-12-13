import { Component, Input, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input()
  project!: ProjectModel;
  constructor() { }

  ngOnInit(): void {
  }

}
