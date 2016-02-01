import * as path from 'path'
import { ng2engine } from 'angular2-universal-preview'
import { AppComponent } from './app.component'
import * as express from 'express'
import {provide, enableProdMode} from 'angular2/core';

// enableProdMode()

const root = path.join(path.resolve(__dirname, '..'));
const app = express()

app.engine('.html', ng2engine)
app.set('views', __dirname)
app.set('view engine', 'html')


app.use(express.static(root))

app.use('/', (req, res) => {
  res.render('index', {
    App: AppComponent
  })
})

app.listen(3000, () => {
  console.log('Express app listen on 3000')
})
