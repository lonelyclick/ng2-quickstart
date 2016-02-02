import {Component} from 'angular2/core'

@Component({
  selector: 'test-selector',
  template: `
    <div id="page-wrapper">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Test</h1>
                <input #box (keyup)="0"/>
                
                {{box.value}}
            </div>
        </div>
    </div>
  `
})
export class Test {}
