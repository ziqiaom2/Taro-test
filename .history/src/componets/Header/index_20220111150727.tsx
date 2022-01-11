import React, { useState } from 'react'
import { Button, View, Input, Text } from '@tarojs/components'
import Taro from '@tarojs/taro';
import store from '../../store/counterMobx6';
import { useObserver } from 'mobx-react';

export default function Header() {
  const [title, setTitle] = useState('默认title')

  function toIndex() {
    Taro.navigateTo({ url: `/pages/index/index?title=${title}` })
  }

  function addT (e){
    const 
  }

  return (useObserver(() => (<View>
    <View className='todo-header'>
      <Input type='text'
        placeholder='请输入你的任务名称'
        value={title}
        onInput={(e) => setTitle(e.detail.value)}
        onBlur={e => addT(e)}
        focus
      />
      <View>{title}</View>
      <Button onClick={toIndex}>导航去index主页面</Button>
    </View>
  </View>
  ))
    
}
