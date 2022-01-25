import React from 'react'
import { useObserver } from 'mobx-react';
import { View, Text, Button } from "@tarojs/components";
import Header from '../../componets/Header';
import store from '../../store/counterMobx6';


import Item from '../../componets/Item';
//需要用store的时候一定要记得使用useObserver


export default function TodoList() {
  return (useObserver(() => (<View>
    <Header></Header>
    {store.todos.map((todo) => {
      return (
        <Item
          key={todo.id}
          {...todo}
        />

      );
    })}
  </View>))

  )
}
