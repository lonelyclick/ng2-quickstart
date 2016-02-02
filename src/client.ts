import {bootstrap} from 'angular2-universal-preview'
import { App } from './app/app'
import {ROUTER_PROVIDERS} from 'angular2/router'

bootstrap(App, [
  ...ROUTER_PROVIDERS
])
