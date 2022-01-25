import { View, Swiper, SwiperItem } from '@tarojs/components'
import {Component} from 'react'
import { AtSwipeAction } from 'taro-ui'

import './index.less';






export default function Item extends Component {

  render(){
  return (
    <View>
      <AtSwipeAction
        key={this.props.id}
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
}
