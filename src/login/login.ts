import { Component } from 'angular2/core'
import { HTTP_PROVIDERS }    from 'angular2/http';

import { Auth } from './providers/auth'

@Component({
  selector: 'login',
  template: require('./login.html'),
  styles: [
    require('./login.css')
  ],
  providers: [
    HTTP_PROVIDERS,
    Auth,
  ]
})
export class Login {
  public username:String = ''
  public password:String = ''

  constructor(private _auth: Auth) {}

  onSubmit() {
    if (!this.isValid()) {
      return
    }

    this._auth.doAuth().subscribe(this.loginRespond, error => alert(`Server error. Try again later`))
  }

  isValid() {
    return this.username.length > 4 && this.password.length > 5
  }

  loginRespond(response) {
    response = response.json()
    if (response.ec === 0) {
      alert(`登录成功 - ${response.msg}`)
    } else {
      alert(`登录失败 ${response.msg || ''}`)
    }
  }
}
