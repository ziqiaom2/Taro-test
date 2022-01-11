import { observable, action } from "mobx";
import { inject } from "mobx-react";
// import { makeAutoObservable } from 'mobx'
// constructor() {
//         makeAutoObservable(this)
//     }
class Store {
  @observable counter = 0;
  @action counterStore() {
    this.counter++;
  }
  @action increment() {
    this.counter++;
  }
  @action decrement() {
    this.counter--;
  }
  @action incrementAsync() {
    setTimeout(() => {
      this.counter++;
    }, 1000);
  }
  @observable todos = [
    { id: "001", title: "Vue", done: false },
    { id: "002", title: "React", done: false },
    { id: "003", title: "Angular", done: false },
  ];
  @action addTodo (obj){
    this.todos.unshift(obj)
  }
  @action checkTodo
}

export default new Store();
