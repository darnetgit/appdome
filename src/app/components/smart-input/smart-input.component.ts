import { Component, OnInit } from '@angular/core';
import { InputServiceService } from '../../input-service.service';
import { Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged} from "rxjs/internal/operators";

@Component({
  selector: 'app-smart-input',
  templateUrl: './smart-input.component.html',
  styleUrls: ['./smart-input.component.scss']
})
export class SmartInputComponent implements OnInit {
  userInput:string='';
  constructor(private inputServ:InputServiceService) { 
  }
  onInputChange(input:string){
    this.inputServ.sendInput(this.userInput)
  }
  ngOnInit(): void {
  }

}
