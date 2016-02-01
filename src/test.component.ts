import {Component} from 'angular2/core'

@Component({
  selector: 'test-selector',
  template: `
    <div>
      <ul>
        <li *ngFor="#user of users" (click)="clickUser($event, user)">
          {{user}}
        </li>
      </ul>
      <div *ngIf="str">
        {{str.substring(1)}}
      </div>

      <input #box (keyup)="onBoxKeyup(box.value)">
      <div>
        {{boxValue}}
      </div>

      <input #person (keyup)="personValue=person.value">
      <span>{{personValue}}</span>

      <input #grep (keyup.enter)="0">
      {{grep.value}}
    </div>
  `
})
export class TestComponent {
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
