import { Component, ReactNode } from 'React';


import {Suspense, useState} from 'react'
import { observer, useObserver } from 'mobx-react';
import { View, Text, Button } from "@tarojs/components";
import Header from '../../componets/Header';
import store from '../../store/counterMobx6';
import Loading from '../../componets/Loading';


import Item from '../../componets/Item';
import SwipeAction from '../../componets/SwipeAction';
//需要用store的时候一定要记得使用useObserver

@observer
class TodoList extends Component{
  state = {hasError:''}

  static getDerivedStateFromError(error) {
    console.log("error occurred:", error);
    return  this.setState({hasError: error})
  }

  componentDidCatch() {
    console.log("此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决");
  }
  render(){
    return (<View>
      <Header></Header>
      <Suspense fallback={<Loading />}>
      {store.todos.map((todo) => {
        return (
          <SwipeAction
            key={todo.id}
            {...todo}
          />
  
        );
      })}
      </Suspense>
    </View>)
  }
  

}
export default TodoList