import { observable,action }  from "mobx";
import { inject } from "mobx-react";
// import { makeAutoObservable } from 'mobx'
// constructor() {
//         makeAutoObservable(this)
//     }

export default class store
  {
    @observable counter= 0
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
    }}

