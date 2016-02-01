import {Component} from 'angular2/core'

@Component({
  selector: 'test-selector',
  template: `
    <div id="page-wrapper">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Test</h1>
            </div>
        </div>
    </div>
  `
})
export class Test {
  public str:String = 'I am a single one';
  public users = ['abc', 'def', 'ggg', 'ssss'];
  public boxValue:String;
  public personValue:String;

  clickUser(event, user) {
    console.log(event, user)
  }

  onBoxKeyup(value) {
    console.log(value)

    this.boxValue = value
  }
}
