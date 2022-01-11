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
  @action addTodo(obj) {
    this.todos.unshift(obj);
  }
  @action checkTodo(id) {
    this.todos.forEach((todo) => {
      if (todo.id === id) todo.done = !todo.done;
    });
  }
  @action deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    console.log("this.todos", this.todos);
  }
  @action checkAllTodo(done) {
    this.todos.forEach((todo) => {
      todo.done = done;
    });
  }
  @action clearAllTodo() {
    this.todos = this.todos.filter((todo) => {
      return !todo.done;
    });
  }
}

export default new Store();
