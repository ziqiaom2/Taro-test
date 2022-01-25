import { View, Swiper, SwiperItem } from '@tarojs/components'
import {Component} from 'react'
import { AtSwipeAction } from 'taro-ui'

import './index.less';






export default function Item(props){
  const {id,title} = props

  return (
    <View>
        <View id='title'>{title}</View>

    </View>
  )
      
}
