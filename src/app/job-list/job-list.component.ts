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
  	if(this.tags.indexOf(tag)==-1){
      this.tags.push(tag);
    }
  }

  deleteTag=(tag:string)=>{
    let index=this.tags.indexOf(tag);
    if(index>-1){
      this.tags.splice(index,1);
    }
  }

  validateIfMatchWithTag=(tags)=>{
    if(this.tags.length==0){
      return true;
    }
    for(let tag of this.tags){
      if(tags.indexOf(tag)==-1){
        return false;
      }
    }
    return true;
  }
}
