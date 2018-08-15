import { Component, OnInit } from '@angular/core';

import {ActionService} from '../services/action.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	static SCORE =0;

	constructor(private actions: ActionService) {}

	getScore(){
		return HeaderComponent.SCORE;
	}

  ngOnInit() {
  }

  

}
