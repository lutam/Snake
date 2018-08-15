import { Injectable } from '@angular/core';
import { interval } from 'rxjs/observable/interval';

import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { SPEED, GRID } from '../config/config';




@Injectable()
export class ActionService {

static DIRECTION =1;
static HEAD = [GRID/2,GRID/2-1]; 

static STARTED = false;

headSlot$: Observable<number>;
private boolSubject2: Subject<number>;

directionsQueue: string[];

	constructor(){ 

		this.boolSubject2 = new Subject<number>();
        this.headSlot$ = this.boolSubject2.asObservable();
        this.directionsQueue=[];
    }

	start() : void{
		console.log("START!");
		ActionService.STARTED = true; 
		const source = interval(1000 - SPEED*100);

		source.subscribe(val => this.walk());

	}

	walk() : void{
		if(ActionService.STARTED){
		if(this.directionsQueue.length>0){
			this.changeDirection(this.directionsQueue[0]);
			this.directionsQueue.shift();
		}	
		let index = 0;
		let gauge = -1;
		if(ActionService.DIRECTION == 1 || ActionService.DIRECTION == 3){
			index = 1
		}
		if(ActionService.DIRECTION == 3 || ActionService.DIRECTION == 2){
			gauge = 1;
		}

		let oldValue = ActionService.HEAD[index];
		let newValue = oldValue + gauge;
		if( newValue > GRID-1 ) { newValue = 0; }
		else if( newValue < 0 ){ newValue = GRID-1; }
		ActionService.HEAD[index] = newValue;
		this.headSlot=ActionService.HEAD[0]*GRID+ActionService.HEAD[1];

		}	
		
	}

	ears(key: string) : void{
		if(!ActionService.STARTED && key == 'Enter'){
			this.start();
		}else{
			this.directionsQueue.push(key);
		}		
	}

	changeDirection(key){
		if( key == 'ArrowLeft' && ActionService.DIRECTION % 2 == 0){
			ActionService.DIRECTION = 1;
		}else if( key == 'ArrowRight' && ActionService.DIRECTION % 2 == 0){
			ActionService.DIRECTION = 3;
		}else if( key == 'ArrowDown' && ActionService.DIRECTION % 2 != 0){
			ActionService.DIRECTION = 2;
		}else if( key == 'ArrowUp' && ActionService.DIRECTION % 2 != 0){
			ActionService.DIRECTION = 4;
		}
	}



	

	set headSlot(newValue) {
      this.headSlot$ = newValue;
      this.boolSubject2.next(newValue);
    }





}






	


