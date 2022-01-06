import { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject, useObserver } from 'mobx-react'
import Child from '../Child';
import Blog from '../Blog'
import './index.less'

type PageStateProps = {
  store: {
    counterStore: {
      counter: number,
      increment: Function,
      decrement: Function,
      incrementAsync: Function
    }
  }
}

interface Index {
  props: PageStateProps;
}

@inject('store')
@observer
function Index() {



  const increment = () => {
    const { counterStore } = this.props.store
    counterStore.increment()
  }

  const decrement = () => {
    const { counterStore } = this.props.store
    counterStore.decrement()
  }

  const incrementAsync = () => {
    const { counterStore } = this.props.store
    counterStore.incrementAsync()
  }

  render () {
    const { counterStore: { counter } } = this.props.store
    return (useObserver(()=> <View className='index'>
    <Button onClick={this.increment}>+</Button>
    <Button onClick={this.decrement}>-</Button>
    <Button onClick={this.incrementAsync}>Add Async</Button>
    <Text>{counter}</Text>
    <Child></Child>
    <Blog></Blog>
  </View>)
     
    )
  }
}

export default Index
