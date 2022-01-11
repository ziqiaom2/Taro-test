import React ,{useState} from 'react'
import { Button,View } from '@tarojs/components'
import Taro from '@tarojs/taro';


export default function Header() {
const [title, setTitle] = useState('')

function toIndex(){
  Taro.navigateTo({url:`/pages/index/index?title=${title}`})
}
  return (
    <View>
    <div className='todo-header'>
      <input type='text' 
        placeholder='请输入你的任务名称'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <div>{title}</div>
      <Button onClick={toIndex}>导航去index主页面</Button>
    </div>
    </View>
  )
}
