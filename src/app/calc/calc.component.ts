import { Component } from "@angular/core";


@Component(
  {
    selector: 'app-calc',
    templateUrl: './calc.component.html',
    styleUrls: ['./calc.component.css']
  }
)
export class CalcComponent{
title="Calculator";
title2="FActorial";
title3="Prime Number";
  public num1!: number;
  public num2!: number;
  public num3!: number;
  public num4!: number;
  public result!: number;
  public result2!: number;
result3=0;
temp=0;
  public i!: number;

add(){
  this.result = this.num1 + this.num2;
}
sub(){
  this.result = this.num1 - this.num2;
}
mul(){
  this.result = this.num1 * this.num2;
}
div(){
  this.result = this.num1 / this.num2;
}
fact(){
  this.result2 = 1;
  for(this.i=this.num3; this.i>=1;this.i--)
  {
   this.result2 = this.result2*this.i;
  }
}
prime(){
  if(this.num4==1 || this.num4==0)
  {
    this.result3 = 3;
  }
  else(this.num4>=3);{
    this.temp=this.num4/2;
    for(this.i=2; this.i>=2;this.i--)
    {
      if(this.num4%this.i==0)
      {
        this.result3=2;
      }
      else{
        this.result3=1;
      }
    }
  }
}
}
