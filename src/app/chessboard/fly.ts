import { GRID } from '../config/config';
import { Snake } from './snake';


export class Fly{
	position: number;
	timer: number;
	
	constructor(private pente: Snake){

		let emergency=0;
		do{ 
			this.position = Math.floor(Math.random()*GRID*GRID-1);    
			emergency++; 
		}while( pente.isSnaked(this.position)!=0 && emergency<10000)
		
		this.timer=9;
	}

}