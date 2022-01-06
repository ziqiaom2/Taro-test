import { observable,actions }  from "mobx";
// import { makeAutoObservable } from 'mobx'
// constructor() {
//         makeAutoObservable(this)
//     }
export default 
  {
    @observable counter: 0,
    counterStore() {
      this.counter++;
    },
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    incrementAsync() {
      setTimeout(() => {
        this.counter++;
      }, 1000);
    }}

