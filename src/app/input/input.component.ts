import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '.app-input-child',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
@Input() list : {name:string,content:string};

  constructor() { }

  ngOnInit() {
   
  }



}
