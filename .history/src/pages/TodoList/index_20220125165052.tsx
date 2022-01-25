import React from 'react'
import { View, Text,Button } from "@tarojs/components";
import Header from '../../componets/Header';
import store from '../../store/counterMobx6';


import Item from '../../componets/Item';


export default function TodoList() {
  return (
<View>
  <Header></Header>
  {store.todos.map((todo) => {
        return (
          <Item
            key={todo.id}
            {...todo}
          />

        );
      })}
</View>
  )
}
