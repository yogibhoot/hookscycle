import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges, DoCheck {

  private myNUmber !: number;

  @Input() Myname:any;
  // @Input() MynewNumber:any; 

  @Input()
  set MynewNumber(number : number)
  {
    this.myNUmber = number;
  }

  get MynewNumber()
  {
    return this.myNUmber;
  }

  constructor() { }

  ngOnChanges(changes : SimpleChanges){
    const newNumberchange: SimpleChange = changes.MynewNumber;
    console.log('Previous Value - (ng on change)', newNumberchange.previousValue)
    console.log("Current Value - (ng on change)", newNumberchange.currentValue);
    this.MynewNumber = newNumberchange.currentValue;

  }

  ngOnInit(): void {
    console.log(this.MynewNumber)
  }

  ngDoCheck(){
    console.log(this.Myname)
  }

  ngAfterContentInit(){
    console.log("yyyyyyyyyyyyyyyyy")
  }

  ngAfterContentChecked(){
    console.log("this was excuted after ngAfterContentInit")
  }

  ngAfterViewInit(){
    console.log("this was excuted after ngAfterContentChecked")
  }

  ngAfterViewChecked(){
    console.log("this was excuted after ngAfterViewInit")
  }

  ngOnDestroy(){
    console.log("content was destroyed")
  }

}
