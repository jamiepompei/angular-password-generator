import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeSymbols = false;
  includeNumbers = false;
  includeLetters = false;
  password = '';

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onButtonClick() {
    console.log(this.includeSymbols);
    this.password = 'MY PASSWORD';
  }



}
