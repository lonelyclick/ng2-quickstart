import { Injectable } from 'angular2/core'
import { Http }       from 'angular2/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class Auth {
  constructor(private http: Http) {}

  doAuth() {
    return this.http.get('/api/auth')
  }

  private logAndPassOn (error: Error) {
    return Observable.throw(error)
  }
}
