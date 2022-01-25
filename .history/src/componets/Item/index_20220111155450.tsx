import { View } from '@tarojs/components'
import React from 'react'






export default function Item(props) {
  const {id,title} = props
  return (
    <View>
      <View>id:{id}--title:{title}</View>
    </View>
  )
}
