import { observable } from 'mobx'
import { makeAutoObservable } from 'mobx'
constructor() {
        makeAutoObservable(this)
    }
const counterStore = observable({
  counter: 0,
  counterStore() {
    this.counter++
  },
  increment() {
    this.counter++
  },
  decrement() {
    this.counter--
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  }
})

export default counterStore