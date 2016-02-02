import { Component } from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import { Test } from '../test/test'
import { Main } from '../main/main'
import { Login } from '../login/login'

@Component({
  selector: 'app',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  template: require('./app.html'),
  styles: [
    require('./app.css')
  ]
})
@RouteConfig([
  {
    path: '/',
    component: Main,
    name: 'Main'
  },
  {
    path: '/test',
    component: Test,
    name: 'Test'
  },
  {
    path: '/login',
    component: Login,
    name: 'Login'
  }
])
export class App {}
