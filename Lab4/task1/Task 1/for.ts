import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @for(os of Users; track os.id){

      {{os.name}}
    }
  `,
})
export class App {
  Users = [
  {id: 0, name: 'Sarah'},
  {id: 1, name: 'Amy'},
  {id: 2, name: 'Rachel'},
  {id: 3, name: 'Jessica'},
  {id: 4, name: 'Poornima'},
    
  ];

  
}
