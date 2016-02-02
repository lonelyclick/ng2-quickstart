import { Component } from 'angular2/core'

@Component({
  selector: 'main',
  template: require('./main.html'),
  styles: [
    require('./main.css')
  ],
  providers: [
  ],
  host: {
    class: 'main-class-hahahaha'
  }
})
export class Main {}
