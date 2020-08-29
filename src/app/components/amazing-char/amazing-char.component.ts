import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-amazing-char',
  templateUrl: './amazing-char.component.html',
  styleUrls: ['./amazing-char.component.scss']
})
export class AmazingCharComponent implements OnInit {
  @Input() inputChar: any
  constructor() { }

  ngOnInit(): void {
  }

}
