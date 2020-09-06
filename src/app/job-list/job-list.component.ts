import { Component, OnInit } from '@angular/core';
import JsonData from '../../assets/data.json';

@Component({
  selector: 'jobList',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
	public tags;
	public jobs;
  constructor() {
  	this.jobs=JsonData;
  	this.tags=[];
  }

  ngOnInit(): void {
  }

  onSelectTag=(tag:string)=>{
  	alert(tag);
  }

}
