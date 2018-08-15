import { Component, HostListener} from '@angular/core';
import {ActionService} from './services/action.service';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private actions: ActionService){ }

	@HostListener('document:keydown', ['$event']) openEars(event: KeyboardEvent) { 
    	this.actions.ears(event.key);

  	}


  	
}






  