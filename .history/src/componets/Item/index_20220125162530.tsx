import { View, Swiper, SwiperItem } from '@tarojs/components'
import React from 'react'
import { AtSwipeAction } from 'taro-ui'
import "~taro-ui/dist/style/components/button.scss"
import './index.less';






export default function Item(props) {
  const { id, title } = props
  return (
    <View>
      <AtSwipeAction
        key={id}
        onOpened={this.handleSingle.bind(this, id)}
        isOpened={false}
        options={[
          {
            text: "删除",
            style: {
              backgroundColor: "#FF4949"
            }
          }
        ]}
        onClick={this.handleChange.bind(this, id)}
      >
        <View id='title'>{title}</View>
      </AtSwipeAction>
    </View>
  )
}
