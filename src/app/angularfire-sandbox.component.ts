import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Component({
  moduleId: module.id,
  selector: 'angularfire-sandbox-app',
  templateUrl: 'angularfire-sandbox.component.html',
  styleUrls: ['angularfire-sandbox.component.css']
})
export class AngularfireSandboxAppComponent {
  title = 'angularfire-sandbox works!';
  fruits: FirebaseListObservable<any[]>;
  fruitsquery: FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any>;
  colorSubject: Subject<any>;
  constructor(public af: AngularFire) {
    this.colorSubject = new Subject();
    this.fruitsquery = af.database.list('/fruits', {
      query: {
        orderByChild: 'color',
        equalTo: this.colorSubject
      }
    });
    this.fruits = af.database.list('/fruits');
    this.item = af.database.object('/item');
  }
  push(newFruitName: string, newFruitColor: string) {
    this.fruits.push({ name: newFruitName, color: newFruitColor})
  }
  save(newName: string) {
    this.item.set({name: newName});
  }
  update(newSize: string) {
    this.item.update({ size: newSize });
  }
  delete() {
    this.item.remove();
  }
  filterBy(color: any) {
    this.colorSubject.next(color);
  }
  login() {
    this.af.auth.login();
  }
}
