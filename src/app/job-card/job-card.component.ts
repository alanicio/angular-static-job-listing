import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jobCard',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {
	@Input() id:number;
	@Input() company:string;
	@Input() logo:string;
	@Input() new:boolean;
	@Input() featured:boolean;
	@Input() position:string;
	@Input() role:string;
	@Input() level:string;
	@Input() postedAt:string;
	@Input() contract:string;
	@Input() location:string;
	@Input() languages:string;
	@Input() tools:string;
  constructor() { }

  ngOnInit(): void {
  }

}
