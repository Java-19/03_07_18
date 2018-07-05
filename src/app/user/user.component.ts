import { Component} from '@angular/core';

@Component({
  selector: 'app-user', //as tag
  // selector: '[app-user]',//as attribute
  // selector: '.app-user',//as class
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  private name: string = 'Vasya';
  private age: number = 23;
  isDisabled: boolean = false;
  myText: string = '';


  constructor(){
    setTimeout(() => {this.isDisabled = true},3000);
  }

  public getName():string{
    return this.name;
  }

  public getAge():number{
    return this.age;
  }

  public setEnabled(){
    this.isDisabled = !this.isDisabled;
  }

  printMouseOver() {
    console.log("Mouse over button");
  }

  // changeText(event: Event) {
  //   console.log(event);
  //   this.myText = (<HTMLInputElement>event.target).value;
  // }

  // changeText(event: string) {
  //   this.myText = event;
  // }

  changeText(event) {
    console.log(event)
    this.myText = event.target.value;
  }
}
