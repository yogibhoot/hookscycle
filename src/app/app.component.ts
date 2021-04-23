import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'opera';
  name : string ="yogi";
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  data1={ name: 'yogi', age: '22'};
  power = 5;
  factor = 1;

  private number = 11111;
  isVisibility : boolean = true;

  constructor() {}

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()));
  });

  switchVisibility(){
    this.isVisibility = !this.isVisibility;
  }

  user = {
    name: "yogi"
  }

  updateValue(){
    this.user.name = 'samri'
  }

  get counter(){
    return this.number;
  }

  set counter(value:any){
    this.number = value;
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }
  
}