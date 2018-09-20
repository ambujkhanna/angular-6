import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit { 
name="";
age="";

@Output() addedinChildEvent = new EventEmitter<{name:string,age:string}>();

EmitToParent(){
  this.addedinChildEvent.emit({
    name:this.name,
    age:this.age
  })
}
constructor() { }

ngOnInit() {}

}
