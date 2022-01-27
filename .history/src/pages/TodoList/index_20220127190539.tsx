import {Suspense, useState} from 'react'
import { useObserver } from 'mobx-react';
import { View, Text, Button } from "@tarojs/components";
import Header from '../../componets/Header';
import store from '../../store/counterMobx6';
import Loading from '../../componets/Loading';


import Item from '../../componets/Item';
import SwipeAction from '../../componets/SwipeAction';
//需要用store的时候一定要记得使用useObserver


export default function TodoList() {
  const [hasError,setHasError] = useState('')

  return (useObserver(() => (<View>
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
  </View>))

  )
}
