import {bootstrap} from 'angular2-universal-preview'
import { App } from './app/app'
import {ROUTER_PROVIDERS} from 'angular2/router'

import './static/sass/app.scss'

bootstrap(App, [
  ...ROUTER_PROVIDERS
])
