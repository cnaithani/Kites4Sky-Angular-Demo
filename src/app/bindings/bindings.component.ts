import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent implements OnInit {

  constructor() { }

  interpolationValue:string
  uniDirectional:string
  twoDirectional:string 
  messageText:string
  ngOnInit() {
    this.interpolationValue = "1";
    this.uniDirectional = "2";
    this.twoDirectional = "3";
  }
  onClickMe() {  
    this.messageText = "4";  
} 

}
