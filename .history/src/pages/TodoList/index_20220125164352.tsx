import React from 'react'
import { View, Text,Button } from "@tarojs/components";
import Header from '../../componets/Header';



import Item from '../../componets/Item';
import store from '../../store/counterMobx6';

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
