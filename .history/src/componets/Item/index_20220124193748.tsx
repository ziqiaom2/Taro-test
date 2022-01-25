import { View, Swiper,SwiperItem } from '@tarojs/components'
import React from 'react'
import './index.less';






export default function Item(props) {
  const {id,title} = props
  return (
    <View>
      <View id='title'>{title}</View>
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        vertical
        circular
        indicatorDots
      >
        <SwiperItem>
          <View className='demo-text-1'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>3</View>
        </SwiperItem>
      </Swiper>
    </View>
  )
}
