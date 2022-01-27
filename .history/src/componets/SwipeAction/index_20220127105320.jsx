import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import store from '../../store/counterMobx6'
import { Input, ScrollView, View } from '@tarojs/components'

import './index.less'





export default class Index extends Component {
  state = {
    animation: '',
    startX: 0, // 开始坐标
    startY: 0,
    editing: false,

  }

  componentDidMount() {
    // 页面渲染完成
    // 实例化一个动画
    const animation = Taro.createAnimation({
      duration: 400,
      timingFunction: 'linear',
      delay: 100,
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res)
      },
    })

    this.setState({
      animation: animation,
    })
  }

  // 滑动开始
  touchstart(e) {
    this.setState({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
    })
  }

  // 滑动事件处理 _index当前索引
  touchmove(e) {
    const that = this

    const startX = that.state.startX // 开始X坐标
    const startY = that.state.startY // 开始Y坐标
    const touchMoveX = e.changedTouches[0].clientX // 滑动变化坐标
    const touchMoveY = e.changedTouches[0].clientY // 滑动变化坐标
    // var isLeft = _class.indexOf("leftMove") != -1; //往左滑的位置
    // var isRight = _class.indexOf("rightMove") != -1;//往右滑的位置

    // 获取滑动角度
    const angle = that.angle(
      { X: startX, Y: startY },
      { X: touchMoveX, Y: touchMoveY }
    )
    // 滑动超过30度角 return
    if (Math.abs(angle) > 30) return
    // 右滑
    if (touchMoveX > startX) {
      console.log('右滑')
      // 实例化一个动画
      const _animation = Taro.createAnimation({
        duration: 400,
        timingFunction: 'linear',
        // delay: 0,
        transformOrigin: 'left top 0',
        success: function (res) {
          console.log(res)
        },
      })

      _animation.translateX(0).step()
      that.setState({
        // 输出动画
        animation: _animation.export(),
      })
    } else if (touchMoveX - startX < -10) {
      // 左滑
      console.log('左滑')
      // 实例化一个动画
      const _animation = Taro.createAnimation({
        duration: 400,
        timingFunction: 'linear',
        // delay: 0,
        transformOrigin: 'left top 0',
        success: function (res) {
          console.log(res)
        },
      })

      _animation.translateX(-80).step()
      that.setState({
        // 输出动画
        animation: _animation.export(),
      })
    }
  }

  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle(start, end) {
    const _X = end.X - start.X
    const _Y = end.Y - start.Y
    // 返回角度 /Math.atan()返回数字的反正切值
    return (360 * Math.atan(_Y / _X)) / (2 * Math.PI)
  }


  deleteT(id) {
    console.log('id:', id);
    store.deleteTodo(id)
    console.log('after deletT:', store.todos);
  }
  //编辑todo
  EditT(id) {
    console.log('id:', id);
    console.log('after deletT:', store.todos);
    this.setState({editing:true})
  }

  render() {
    return (
      <ScrollView className='history' scrollY>
        {/* 每一项 */}
        {this.state.editing ? <Input value={this.props.title} autoFocus></Input> : <View className='historyItem'>
          {/* 删除 */}
          <View className='itemDelete right' onClick={() => this.deleteT(this.props.id)}>删除</View>
          <View className='itemEdit right' onClick={() => this.EditT(this.props.id)}>编辑</View>

          {/* 遮盖层 */}
          <View
            className='itemCover'
            onTouchStart={this.touchstart.bind(this)}
            onTouchEnd={this.touchmove.bind(this)}
            animation={this.state.animation}
          >
            <View className='title'>{this.props.title}</View>

          </View>
        </View>}

      </ScrollView>
    )
  }
}