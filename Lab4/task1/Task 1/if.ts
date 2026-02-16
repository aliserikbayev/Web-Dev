import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` @if(isLoggedIn){
  <p> chiggaa</p>
  }@else{
  
  } `,
})
export class App {
  isLoggedIn = true;
}
