import { Injectable } from 'angular2/core'
import { Http }       from 'angular2/http';
import { Observable } from 'rxjs/Observable';

console.log(Http)

@Injectable()
export class Auth {
  title = "abc"

  constructor(private http: Http) {}

  doAuth() {
    return this.http.get('/api/auth')
  }

  private logAndPassOn (error: Error) {
    console.error(error);
    return Observable.throw(error);
  }
}
