import { useObserver } from 'mobx-react';
import { AtIcon } from 'taro-ui'


import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { Button, View, Input, Text } from '@tarojs/components'
import Taro from '@tarojs/taro';
import store from '../../store/counterMobx6';

import Item from '../Item/index';




export default function Header() {
  const [title, setTitle] = useState('')

  function toIndex() {
    Taro.navigateTo({ url: `/pages/index/index?title=${title}` })
  }

  function addT(e) {
    const obj = { id: (100000 * (Math.random())).toFixed(), title: e, done: false }
    store.addTodo(obj)
    console.log(store.todos);
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
        <View>{title}</View>
        <View  >
          <AtIcon className='at-icon at-icon-settings' value='clock' size='30' color='#F00' onClick={() => addT(title)} ></AtIcon>
        </View>
      </View>


      <Button onClick={toIndex}>导航去index主页面</Button>
      {store.todos.map((todo) => {
        return (
          <Item
            key={todo.id}
            {...todo}
          />

        );
      })}
    </View>
  )))

}
