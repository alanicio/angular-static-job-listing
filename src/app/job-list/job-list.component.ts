import { Component, OnInit } from '@angular/core';
import JsonData from '../../assets/data.json';

@Component({
  selector: 'jobList',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
	public jobs;
  constructor() {
  	this.jobs=JsonData;
  }

  ngOnInit(): void {
  }

}
