import { Component } from '@angular/core';
import {ActionService} from '../services/action.service';

import {HeaderComponent} from '../header/header.component';

import { GRID } from '../config/config';

import { Slot } from './slot';
import { Snake } from './snake';
import { Fly } from './fly';












@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent {

  slots: Slot[];
  slotWidth= 100/GRID+"%";
  snake: Snake;
  fly: Fly;
  headSlot: number;
  tailSlot: number;



  constructor(private actions: ActionService) { 
  	this.slots= [];
  	this.snake= new Snake();

  	for(let i=0; i<GRID*GRID; i++){
  		if(this.snake.isSnaked(i) == 2){ this.headSlot=i; }
  		if(this.snake.isSnaked(i) == 3){ this.tailSlot=i; }
		this.slots[i]= new Slot(i, this.snake.isSnaked(i)); 
  	}
 
	
	this.fly= new Fly(this.snake);
	this.slots[this.fly.position].value = 4;

    this.actions.headSlot$.subscribe((newHeadSlot: number) => { 
		this.realGame(newHeadSlot);
    });

       

        }

        realGame(newHeadSlot: number){

        	let GAMEOVER=false;
        	if(this.snake.isSnaked(newHeadSlot)>0){
        		GAMEOVER=true;
        	}
        	
        		let Hit=false;
        		if(newHeadSlot==this.fly.position){   
        			Hit=true; 
        			HeaderComponent.SCORE+=100;
        		}else{
        			this.slots[this.tailSlot].value = 0;
        			this.tailSlot=this.snake.almostTailSlot();
        		}

        		this.slots[newHeadSlot].value = 2; 
				this.slots[this.headSlot].value = 1; 
				this.headSlot=newHeadSlot;
				
				this.remakeSnake(newHeadSlot, Hit); 
        		if(Hit){
        			this.fly= new Fly(this.snake);
  					this.slots[this.fly.position].value=4;
        		}
        	
        	if(GAMEOVER){
        		console.log("GAME OVER");
				throw new Error("my error message");
			}
        }

         remakeSnake(_n: number, _bigger: boolean){
         	if(_bigger){
        		this.snake.addPiece(_n);
        	}else{
        		for(let i=this.snake.tail.length-1; i>0 ; i--){
        			this.snake.tail[i].id=this.snake.tail[i-1].id;
        		}
        		this.snake.tail[0].id=_n;
        	}
        	


			
  }

        }





