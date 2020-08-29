import { Component, OnInit } from '@angular/core';
import { InputServiceService } from '../../input-service.service';

@Component({
  selector: 'app-smart-input',
  templateUrl: './smart-input.component.html',
  styleUrls: ['./smart-input.component.scss']
})
export class SmartInputComponent implements OnInit {
  userInput:string='';
  constructor(private inputServ:InputServiceService) { }

  onInputChange(){
    this.inputServ.sendInput(this.userInput)
  }
  ngOnInit(): void {
  }

}
