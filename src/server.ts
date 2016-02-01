import * as path from 'path'
import {ng2engine, REQUEST_URL, SERVER_LOCATION_PROVIDERS} from 'angular2-universal-preview';
import { App } from './app/app'
import * as express from 'express'
import {provide, enableProdMode} from 'angular2/core'
import {APP_BASE_HREF, ROUTER_PROVIDERS} from 'angular2/router'

// enableProdMode()

const root = path.join(path.resolve(__dirname, '..'));
const app = express()

app.engine('.html', ng2engine)
app.set('views', __dirname)
app.set('view engine', 'html')


app.use(express.static(root))

app.use('/api/auth', (req, res) => {
  res.send(JSON.stringify({
    ec: 0,
    msg: 'ok'
  }))
})

app.use('/', (req, res) => {
  let baseUrl = '/'
  let url = req.originalUrl || '/'
  res.render('index', {
    App,
    providers: [
      provide(APP_BASE_HREF, {useValue: baseUrl}),
      provide(REQUEST_URL, {useValue: req.originalUrl}),
      ROUTER_PROVIDERS,
      SERVER_LOCATION_PROVIDERS
    ],
    preboot: true
  })
})

app.listen(3000, () => {
  console.log('Express app listen on 3000')
})
