import { Component,OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(){
  }
  test(){
    console.log('aaaaaaaaaaa');
  }

  objects=[{name:'Name 1', content:'content for list 1'},
  {name:'Name 2', content:'content for list 2'},
  {name:'Name 3', content:'content for list 3'}];


  userdata=[{name:'Aman Talwar', age:'25'},
  {name:'Geeta Sanwal', age:'45'},
  {name:'Radhika Mittal', age:'35'}];
  
  addedinChild(data:{name:string,age:string}){
    this.userdata.push({
      name:data.name,
      age:data.age
    })
  }


}
