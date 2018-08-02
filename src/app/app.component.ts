import { Component } from '@angular/core';

interface Person {
  name: string;
  age: number;
  user: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'App';

  person: Person = {
    name: 'Camilo Martinez',
    age: 38,
    user: 'equiman',
  };

  constructor() {
    // this.person.name;
    // this.person.age;
    // this.person.user;
  }
}
