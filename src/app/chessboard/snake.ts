import { Slot } from './slot';
import { GRID } from '../config/config';

export class Snake{

	tail: Slot[];

	constructor(){
		this.tail = [];
		this.tail[0] = new Slot(GRID*GRID/2+GRID/2-1,2);
		this.tail[1] = new Slot(GRID*GRID/2+GRID/2,1);	
		this.tail[2] = new Slot(GRID*GRID/2+GRID/2+1,3);	
	}

	isSnaked(i){
		for(let z=0; z<this.tail.length; z++){
			if(this.tail[z].id==i){
				return this.tail[z].value;
			} 
		}
		return 0;
	}

	almostTailSlot(){
		return this.tail[this.tail.length-2].id;
	}

	addPiece(newPiece: number){ 
		let tmp=[];
		tmp[0]= new Slot(newPiece,2);
		this.tail[0].value=1;
		this.tail= tmp.concat(this.tail);
	}
}