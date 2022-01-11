import { View } from '@tarojs/components'
import React from 'react'
import store from '../../store/counterMobx6';





export default function Item() {
  const { todos } = store
  return (<View>
    <View>id:{todos.id}</View>
    <View>id:{todos.title}</View></View>
  )
}
