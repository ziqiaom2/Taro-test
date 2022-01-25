import { View, Swiper, SwiperItem } from '@tarojs/components'
import {Component} from 'react'
import { AtSwipeAction } from 'taro-ui'

import './index.less';
import store from '../../store/counterMobx6';





export default function Item(props){
  const {id,title} = props
  console.log('item props:',props);

  return (
    <View>
        <View id='title'>{title}</View>

    </View>
  )
      
}
