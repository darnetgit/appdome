import { Component, OnInit, OnDestroy } from '@angular/core';
import { InputServiceService } from 'src/app/input-service.service';
import { Subscription, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators';

@Component({
  selector: 'app-chars-container',
  templateUrl: './chars-container.component.html',
  styleUrls: ['./chars-container.component.scss']
})
export class CharsContainerComponent implements OnInit, OnDestroy {
  chars:Array<string>=[];
  charsCounter:Map<string,number>=new Map();
  subscription: Subscription;
  blink:boolean=false
  charsChanged:Subject<boolean>=new Subject()

  constructor(private inputServ:InputServiceService) { 
    this.charsChanged.pipe(
      debounceTime(100),
    ).subscribe(blinking=>{
      this.blink=blinking
    })
    this.subscription = this.inputServ.reciveInput().subscribe(userInput => {
      //single letter removed
      if (this.chars.length-1==userInput.length) {
        this.removeSingleLetter(this.chars[this.chars.length-1])
      }
      //single letter added 
      else if(this.chars.length+1==userInput.length) {
        this.addSingleLetter(userInput[userInput.length-1])
      }
      //major changes to input text-paste/cut/delete all
      else{
        this.buildCharsCounter(userInput)
      }
      //blink text with debounce of 0.1s
      this.blink=true
      this.charsChanged.next(false)
    });
  }
  addSingleLetter(letter){
    if(this.charsCounter.has(letter)){
      this.charsCounter.set(letter,this.charsCounter.get(letter)+1)
    }else{
      this.charsCounter.set(letter,1)
    }
    this.chars.push(letter)
  }

  removeSingleLetter(letter){
    if(this.charsCounter.get(letter)==1){
      this.charsCounter.delete(letter)
    }else{
      this.charsCounter.set(letter,this.charsCounter.get(letter)-1)
    }
    this.chars.pop()
  }

  buildCharsCounter(userInput){
    this.charsCounter=new Map()
    this.chars=[]
    this.chars=userInput.split('')
    this.chars.forEach(element => {
      if(this.charsCounter.has(element)){
        this.charsCounter.set(element,this.charsCounter.get(element)+1)
      }else{
        this.charsCounter.set(element,1)
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
