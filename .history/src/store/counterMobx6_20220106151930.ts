import { observable,action }  from "mobx";
import { inject } from "mobx-react";
// import { makeAutoObservable } from 'mobx'
// constructor() {
//         makeAutoObservable(this)
//     }
@inject(observable)
export default 
  {
    @observable let counter= 0
    @action function counterStore() {
      this.counter++;
    }
    @action function increment() {
      this.counter++;
    }
    @action function decrement() {
      this.counter--;
    }
    @action function incrementAsync() {
      setTimeout(() => {
        this.counter++;
      }, 1000);
    }}

