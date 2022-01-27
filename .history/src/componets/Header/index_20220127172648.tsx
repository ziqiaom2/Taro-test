import { useObserver } from 'mobx-react';
import React, { useState } from 'react'
import { AtButton } from 'taro-ui';

import Taro from '@tarojs/taro';
import store from '../../store/counterMobx6';
import { Button, View, Input, Text } from '@tarojs/components'











export default function Header() {
  const [title, setTitle] = useState('')

  function toIndex() {
    Taro.navigateTo({ url: `/pages/index/index?title=${title}` })
  }

  function addT(e) {
    const obj = { id: (100000 * (Math.random())).toFixed(), title: e, done: false }
    store.addTodo(obj)
    console.log('store.todos:',store.todos);
    setTitle('')
  }

  return (useObserver(() => (
    <View>
      <View className='todo-header'>
        <Input type='text'
          placeholder='请输入你的任务名称'
          value={title}
          onInput={(e) => setTitle(e.detail.value)}

        />
        <View  >
          <AtButton type='primary' onClick={() => addT(title)} >添加</AtButton>
          <AtButton type='secondary' onClick={toIndex}>导航去index主页面</AtButton>

        </View>
      </View>


      
    </View>
  )))

}
