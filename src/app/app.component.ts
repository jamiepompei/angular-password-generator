import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeSymbols = false;
  includeNumbers = false;
  includeLetters = false;
  password = '';

  onChangeLength(value: string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }

  }

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
    console.log(`
    About to generate a password with the following:
    Includes letters: ${this.includeLetters}
    Includes numbers: ${this.includeNumbers}
    Includes symbols: ${this.includeSymbols}
    `);
    this.password = 'MY PASSWORD';
  }



}
