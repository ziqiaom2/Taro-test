import { View } from '@tarojs/components'
import React from 'react'






export default function Item(props) {
  const {id,title} = props.todo
  return (
    <View>
      <View>id:{id}</View>
      <View>id:{title}</View>
    </View>
  )
}
